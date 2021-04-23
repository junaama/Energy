# Energy

A Command Line Tool for tracking your energy usage across programs.

## Inspiration
Energy was inspired by the CLI "time" on Linux. Time tells you how much time it takes to run a program on your device. We decided to take that and go farther, we created a CLI called Energy. 
## What it does
Energy tells you how much power usage it takes for your program to run on your device. It doesn't stop there. Energy also calculates the energy usage that could be gained from switching to a more renewable power grid. Energy also sends your program energy usage to a Cloud database, where we can chart the energy usage across programs on your devices. The chart features what your program is currently running, and the benefits if your program ran more efficiently through using more renewable power sources.
## How we built it
We built the Command Line tool using Rust.
We built the frontend using Adobe XD and React.
We hosted the database on IBM Cloud.
## Challenges we ran into
There are multiple energy usage and power API's across devices. We had trouble figuring out a cross-platform way to create a tool such as Energy. Right now we are focusing on Linux centered devices
## Accomplishments that we're proud of
We are proud of creating a prototype of the command line tool.

## What's next for Energy
We envision Energy has a lot of potential for users to be able to use the command and view their current program energy usage reflected as a chart of energy usage over time, allowing the user to see which methods and tweaks will decrease their energy usage and increase program efficiency.
We are also looking to add gamification to Energy, allowing users to earn points as they continue to decrease their energy usage over time.
