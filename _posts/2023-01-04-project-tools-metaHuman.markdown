---
layout: default
modal-id: 20
date: 2027-04-01
img: skeletal tremor tools.jpg
alt: image-alt
project-date: Mai 2027
client: Image Processing
category: ComputerScience
description: Creation of an interactive tool on unreal engine to simulate human skeletal tremor.
---
## Explanation of the tool creation process

<br/>
>In this project, I will explain the different stages of creating the tool.
<br/>

### Context of work
<br/>
>Here this tool is part of a course project, we are a team of three, each with the aim of simulating realistic human behavior. My tool aims to simulate a tremor during an intense effort, or a neurodegenerative disease.
My work is based on the animation of a metahuman doing a squat.
<img src = "{{ site.baseurl }}/img/portfolio/v_meta_step1.gif " class = "img-responsive" alt = "Online Training">

>The objective is to be able to wait in real time for these skeletal areas during the launch. Once this waits, the second objective is to manipulate and modify these skeletal positions.

<img src = "{{ site.baseurl }}/img/portfolio/RetargetMan.png " class = "img-responsive" alt = "Online Training">

#### The desired goal
> My goal is to reach this micro disturbance on the knees
<img src = "{{ site.baseurl }}/img/portfolio/distor.gif " class = "img-responsive" alt = "Online Training">

#### First tool prototype
##### Simulation approach
>The goal is to move this piece of skeleton in real time, and observe the results.
<img src = "{{ site.baseurl }}/img/portfolio/first_idea.jpg " class = "img-responsive" alt = "Online Training">

##### Implementation
>_Access to the various nodes of the skeleton_
>>In the Animation Blueprint _BP_AnimAoi_ linked to metahuman, we locally change a piece of skeleton among the global animation.
To do this the nodes _local to component_ and _component to local_ play the role of the transition matrix to pass from a different coordinate space to another.
<img src = "{{ site.baseurl }}/img/portfolio/blue_print_change_rotation_of_legs.png " class = "img-responsive" alt = "Online Training">
Here I access a skeletal node and I operate a translation by a specific vector.

>_Function for modifying the translation vector_
>> The role of this function is to access the _BP_AnimAoi_ class to modify the input vector there.
<img src = "{{ site.baseurl }}/img/portfolio/function_of_meta_human_to_chnage_variable_of_degree.png " class = "img-responsive" alt = "Online Training">

>_Call vector modification by event_
>> We add an event related to this change in the blueprint event of the global scene. Linked to the key event, we add random material rotation.
<img src = "{{ site.baseurl }}/img/portfolio/change_event_with_key.png " class = "img-responsive" alt = "Online Training">
<br/>

##### Observing the prototype
> _Result_
>>We observe that the modification is happening correctly and in real time, only the foot moves. Which is not the desired effect. We must make sure to modify expect the desired realism. The track is the _procedural processing_.
<img src = "{{ site.baseurl }}/img/portfolio/exemple_transform_bones.gif" class = "img-responsive" alt = "Online Training">

#### Second tool prototype
##### Simulation approach
>The second prototype is described in the Unreal documentation, we must make sure to modify the knees while keeping the bust and the foot static with respect to the scene marker.
<img src = "{{ site.baseurl }}/img/portfolio/exemple_pro1.gif " class = "img-responsive" alt = "Online Training">
The role of the Ik Solver is to generate static zones through a root bone and an end bone.
<img src = "{{ site.baseurl }}/img/portfolio/bloc_sk.png" class = "img-responsive" alt = "Online Training">

##### Implementation
>_Method par IK_
>>In this method we generate nodes in a structure that we call mother. Each _IKGoal_ node makes the bone it is affiliated with static, this method is the _IkRig_ method of adding solvers. See the example below:
<img src = "{{ site.baseurl }}/img/portfolio/Pole4.gif" class = "img-responsive" alt = "Online Training">

>_Added implementation on the metaHuman_
>>I access the control of each of the _IKGoal_ and I apply a vector transformation to it according to an event.
<img src = "{{ site.baseurl }}/img/portfolio/procedural_b.png" class = "img-responsive" alt = "Online Training">
Here are the possibilities that can be made thanks to this tool in post-compilation:
<img src = "{{ site.baseurl }}/img/portfolio/articul.gif" class = "img-responsive" alt = "Online Training">
<img src = "{{ site.baseurl }}/img/portfolio/rot.gif" class = "img-responsive" alt = "Online Training">

##### Observing the prototype
> _Result_
>> We observe a much better result due to the realism, and the fixing of the foot to the ground in a static way. There is still a lot of micro-parameter to manage my results better.
<img src = "{{ site.baseurl }}/img/portfolio/resultat_shake.gif" class = "img-responsive" alt = "Online Training">