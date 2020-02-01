const WebSocket = require('ws');
const server = 'wss://data-gen.test.ecogate.com';
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWVkIjoibWFyZWsiLCJpYXQiOjE1Nzk3MjY5MDQsImV4cCI6MTU3OTgxMzMwNCwiaXNzIjoiZWNvZ2F0ZSIsInN1YiI6InN3LWVuZyJ9.l33x_ZGjjVHcLde6BxS6r0bqsc4k13tLwNboILaca98';

function authenticate (socket, token) {
	const msg = {
		token: token,
	};

	socket.send(JSON.stringify(msg));
}

function getAvg(Inputs) {
	let sum = 0;
	Inputs.forEach(element => {
		sum+= element;
	});
	return sum/Inputs.length
}

function getSum(Inputs) {
	let sum = 0
	Inputs.forEach(input => {
		sum += input;
	});
	return sum;
}

function calcWorkstationAirVolume(workstation) {
	let airVelocity = workstation["airVelocity"]["value"];
	let airVelocityValUnits = workstation["airVelocity"]["units"];
	let diameter = workstation["diameter"]["value"];
	if(airVelocityValUnits === "m/s") {
		//get per hour
		let secondsToHour = 60*60;
		airVelocity = airVelocity * secondsToHour;
	} else {
		console.log("invalid velocity val units");
		return;
	}

	if(workstation["diameter"]["units"] !== "mm") {
		console.log("invalid diameter units");
		return;
	}
	return diameter*airVelocity;
}

function getSystemAirVolume(workstations) {
	let sum = 0;
	workstations.forEach(workstation => {
		//calculate workstation air volume
		sum += calcWorkstationAirVolume(workstation);
	});
	return sum;
}

function saveWorkStationUtilization(workStations, currentData) {
	workStations.forEach(workStation => {
		let id = workStation["id"];
		let activeFlag = workStation["active"];
		if(activeFlag)
			active = 1;
		else
			active = 0;
		//default
		if(!currentData[id])
			currentData[id] = {
				"active": 0,
				"total" : 0
			};
		currentData[id]["active"] += active;
		currentData[id]["total"] += 1;
	});
}
function saveWorkStationAirVolume(workStations, currentData) {
	workStations.forEach(station => {
		let id = station["id"]
		let active = station["active"];
		let airVelocity = station["airVelocity"]["value"];
		let diameter = station["diameter"]["value"];
		let volume = airVelocity *60*60*diameter;
		if(!active)
			return 
		if(!currentData[id])
			currentData[id] = []
		else {
			currentData[id].push(volume)
		}
	});
}
function saveWorkStationAirVelocity(workStations, currentData) {
	workStations.forEach(station => {
		let id = station["id"]
		let active = station["active"];
		let airVelocity = station["airVelocity"]["value"];
		//only save in currentData if active
		if(!active)
			return 
		if(!currentData[id])
			currentData[id] = []
		else
			currentData[id].push(airVelocity);
	});
}

function generateStats (inputData) {
	let powerVals = [];
	let savingsVals = [];
	let systemAirVolumes = [];
	let workStationUtilization = {};
	let workStationAirVelocity = {};
	let workStationAirVolume = {};
	inputData.forEach(periodData => {
		let powerData = periodData["data"]["system"]["power"];
		let savingsData = periodData["data"]["system"]["savings"];
		//array of workstations
		let workStations = periodData["data"]["workstations"];
		let systemAirVolume = getSystemAirVolume(workStations);
		systemAirVolumes.push(systemAirVolume);
		saveWorkStationAirVolume(workStations, workStationAirVolume);
		saveWorkStationAirVelocity(workStations, workStationAirVelocity);
		saveWorkStationUtilization(workStations, workStationUtilization)

		if(powerData["units"] === "kW") {
			powerVals.push(powerData["value"])
		} else {
			console.log(`error recieved a power value in units: ${powerData["units"]}`)
		}

		if(savingsData["units"] === "%") {
			savingsVals.push(savingsData["value"] * 100);
		} else {
			console.log(`error recieved a power value in units: ${savingsData["units"]}`)
		}
		//calculate the energy consumed...
	});
	let totalUtilizationPercentages = [];
	let allWorkStations = Object.keys(workStationUtilization);
	let utilizationPerWorkStation = {};
	let velocityPerWorkStation = {}
	let airVolumePerWorkStation = {};
	allWorkStations.forEach(id => {
		let percentage = workStationUtilization[id]["active"]/workStationUtilization[id]["total"]*100;
		totalUtilizationPercentages.push(percentage)
		utilizationPerWorkStation[id] = percentage;
		velocityPerWorkStation[id] = getAvg(workStationAirVelocity[id]);
		airVolumePerWorkStation[id] = getAvg(workStationAirVolume[id]);
	});

	console.log(powerVals);
	console.log(savingsVals);
	return {
		"Average Power": getAvg(powerVals),
		"Average Savings %" : getAvg(savingsVals),
		"Average System Air Volume": getAvg(systemAirVolumes),
		"Energy Consumed in kWh": getSum(powerVals),
		"Energy Saved in kWh": "TODO",
		"Average Workstation Utilization in %": getAvg(totalUtilizationPercentages), 
		"Average Utilization in % per workstation" : utilizationPerWorkStation, 
		"Average Air Velocity in m/s per workstation": velocityPerWorkStation,
		"Average Air Volume in m^3/h per workstation": airVolumePerWorkStation
	};
}

// Connect to the socket
let rawData = [];
let stats = {};
const socket = new WebSocket(server);
console.log(`Connecting to ${server}`);

socket.on('error', error => {
	console.error('Connection error:', error);
});

socket.on('open', () => {
	console.log('Socket Opened');

	authenticate(socket, authToken);
});

socket.on('message', data => {
	console.log('Receiving data');

	try {
		rawData.push(JSON.parse(data));
	}
	catch (error) {
		console.warn(`Failed to parse message as JSON: ${data} ${error}`);
	}
});

socket.on('close', event => {
	console.log('Socket closed');

	// Generate & output the statistics
	stats = generateStats(rawData);
	console.log(stats);
});