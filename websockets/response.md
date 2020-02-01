# Solution

## Specs
	node version: v11.10.0

## What I could've done better

I was not able to correctly find a solution for max power saved as I did not know how to calculate the max power used .... so I didnt know how much power was saved when 100% power was saved..

I opted to repeatedly loop over the workstations per function call in saveWorkStationAirVolume(), saveWorkStationAirVelocity(), saveWorkStationUtilization() which results in extra overhead and might create potential problems in the future...a refactor could be done where I loop over first then call the functions inside that main loop over the workstations.

## Future Refactors
I would in the future refactor the code to allow for error handling in the case of varying units or invalid units. I had the convenience of having all same units in this case.

Furthermore I would definitely use the replace temp var with query process used in refactoring to extract out the common formula calcuations (for instance , the calculations for the air volume) 

Also the websocket stream conveniently had 60 samples over an entire duration of 1 hour, so in the future I should definitely the time period into account instead of assuming the total duration was 1 hour. 
