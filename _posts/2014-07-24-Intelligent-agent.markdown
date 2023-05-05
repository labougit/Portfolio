---
layout: default
modal-id: 9
date: 2022-10-01
img: i_aspi.jpg
alt: image-alt
project-date: Octobre 2022
client: AI
category: ComputerScience
description: The goal of this project is to generate an omniscient intelligent agent whose role is to suck up dust and collect jewels in a continuously modified space. The environment will consist of a map containing 25 pieces on which jewels and dust are randomly placed in an infinite loop. The agent must contain two types of exploration algorithm an uninformed and an informed, to be able to clean the environment.

---
<br/>

### Introduction
> The design of our program is based on the fact that we want there to be no direct communication between the environment (generation of jewels and random dust in the mansion) and the robot (capture of the mansion, choice of its path based on an exploration algorithm). We therefore have three threads in our program: TR for ThreadRobot which will take care of the behavior of the robot, TE for ThreadEnvironment which allows the random generation of dust and jewels then TI for ThreadInterface which manages the display and takes care of managing the mansion and the score. TI can be seen as a bridge between TR and TE so that they can be on the same mansion.
The communication between the threads will be done through a synchronized queue that each of these threads will share. So we have TE and TR as producer in the tail and TI as consumer in the tail.

> _We can see below the images of our program in operation:_
<img src = "{{ site.baseurl }}/img/portfolio/agent.png " class = "img-responsive" alt = "Online Training">
<img src = "{{ site.baseurl }}/img/portfolio/agent2.png " class = "img-responsive" alt = "Online Training">

### Description of the environment
#### Property
>The environment is the simplest Thread in the project. It only consists of randomly managing dust and jewels. These last two elements each have their own class which inherits from the ‘Object_scene’ class. Jewel or dust class have their own respective attributes (image path, number of points when to vacuum or pick up, their position in the mansion matrix). We also have a vacuum cleaner class which inherits from 'Object_scene' allowing the display of the vacuum cleaner.
#### Structure
>The structure of the environment is represented by a class which inherits from the Thread.threading object, which is called ThreadEnvironment, and which allows in an infinite loop to generate dust and objects with a random sleep between x and y seconds. So we have the generation of the future object which is random (can be a dust, a jewel or nothing) and the time between two appearances (the time is between x and y seconds), X and Y two variables defined by the user in the code.

>The environment is a 3-dimensional array containing in each of these boxes a list of ‘Object_scene’ objects. The 'Object_scene' class is the parent class for dust, jewelry and vacuum cleaner.

### Agent Description
#### Ownership and type of agent
>The ThreadRobot is a class that inherits from Thread.threading. This class has the role, in an infinite loop, of carrying out the 4 steps necessary for the operation of our intelligent agent. It calls the capture function, then transforms the result into a tree, and thus executes the exploration algorithm before executing the whole thing.
These steps are described in more detail in the Modeling section.
This class also makes it possible to store the attributes necessary for these steps.
Agent structure and function
When the Robot captures its environment, it proceeds by constructing a tree representing the environment in a hierarchical manner, and then applying an exploration to it.

### Agent Description
#### Ownership and type of agent
>The ThreadRobot is a class that inherits from Thread.threading. This class has the role, in an infinite loop, of carrying out the 4 steps necessary for the operation of our intelligent agent. It calls the capture function, then transforms the result into a tree, and thus executes the exploration algorithm before executing the whole thing.
These steps are described in more detail in the Modeling section.
This class also makes it possible to store the attributes necessary for these steps.
#### Agent structure and function
>When the Robot captures its environment, it proceeds by constructing a tree representing the environment in a hierarchical manner, and then applying an exploration to it.

> <img src = "{{ site.baseurl }}/img/portfolio/aspirateur.gif " class = "img-responsive" alt = "Online Training">


