# Mars Rover Kata

A Rover is a robot that can ride around on a remote planet, based on which inputs it receives from the command center on our home planet.

We can imagine that we can send a Rover a list of commands, so that it can then interpret and execute those commands and report back its position.

For example, let's say a Rover has just landed and we managed to land it facing the North pole. We decide its position when landed is at (0,0).

If we then send it this list of commands: "f,f,r,b,b,l,l,f,f,f,l", then the Rover should be positioned at (-5,2), facing West.

* 'f' = move forwards
* 'b' = move backwards
* 'r' = turn right (rotate, not strafe)
* 'l' = turn left (rotate, not strafe)

## Rover Basics
* [ ] A Rover has a position and a direction it's facing
* [ ] A Rover can receive a "forwards" command, changing its position
* [ ] A Rover can receive a "backwards" command, changing its position
* [ ] A Rover can receive a "left" command, turning its direction
* [ ] A Rover can receive a "right" command, turning its direction

## Rover Map awareness
* [ ] When a Rover exits a map's edge, it enters at the opposite edge
* [ ] A Rover can detect and warn about obstacles on the planets' surface
