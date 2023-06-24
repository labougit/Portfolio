---
layout: default
modal-id: 6
date: 2022-09-15
img: i_metahumans.jpg
alt: image-alt
project-date: September 2022
client: Tech Art Unreal Engine
category: ComputerScience
description: Research project at LIARA in UQAC - Video generation with Unreal Engine, MetaHuman, and Faceware.
---

# MetaHuman's project 
<br/>
>This project in coordination with the LIARA research team is supervised by Yannick Francillet. It includes a team of three people. 
@Baptiste Krecina : [Portfolio](https://baptistekrc.notion.site/baptistekrc/Baptiste-Krecina-28ece7ab698346b6acc9c4c0c15383f2)
@Jade Cothenet : [Portfolio](https://jcothenet-portfolio.odoo.com/)
The goal is to be able to train an AI to detect bad or good placement of an elderly character practicing a sport.
This challenge involves the generation of a large dataset in photorealistic video format usable by AI. 
<br/>
<br/>
>The goal is to create a tool on UnrealEngine5 to create videos of metahumans according to these criteria:
>>_Realistic environment_<br/>
>> _Flexible and understandable facial animation_<br/>
>> _Changing scenery_<br/>
>> _Tool generating metaHumans animations_<br/>

## Environment creaton
>First my role in this project was to build a photorealistic environment. I built the entire asset there on the game engine. Then it was a question of adding the lights to make the scene lively and realistic.<br/>
>>_Environment creation:_
<br/>
<img src = "{{ site.baseurl }}/img/portfolio/i_meta_step1.png " class = "img-responsive" alt = "Online Training">
<img src = "{{ site.baseurl }}/img/portfolio/i_meta_step2.png " class = "img-responsive" alt = "Online Training">
<img src = "{{ site.baseurl }}/img/portfolio/i_meta_step3.png " class = "img-responsive" alt = "Online Training">
<img src = "{{ site.baseurl }}/img/portfolio/i_meta_step4.png " class = "img-responsive" alt = "Online Training">
<img src = "{{ site.baseurl }}/img/portfolio/i_meta_step5.png " class = "img-responsive" alt = "Online Training">


## MetaHuman's animation
>Then for the import of the metaHuman it was a question of applying an animation to it. For this I linked the animation of a mixamo dummy to the metaHuman dummy.<br/>
>>_MetaHuman's animation:_
<br/>
<img src = "{{ site.baseurl }}/img/portfolio/v_meta_step1.gif " class = "img-responsive" alt = "Online Training">
<img src = "{{ site.baseurl }}/img/portfolio/v_meta_step2.gif " class = "img-responsive" alt = "Online Training">

>This change of animation is done using a key, dynamically when launching the scene

## Switch of camera and texture
>Then our role is to provide tools to switch cameras in the scene. And to make a touch system that changes the texture of the environment's materials in real time<br/>
>>_Switch of camera:_
<br/>
<img src = "{{ site.baseurl }}/img/portfolio/v_meta_step3.gif " class = "img-responsive" alt = "Online Training">
>>_Changing of texturing in real time:_
<br/>
<img src = "{{ site.baseurl }}/img/portfolio/v_meta_step4.gif " class = "img-responsive" alt = "Online Training">

## Skeletal Tremor Tool

#### Explanation of the tool creation process
<br/>
>In this project, I will explain the different stages of creating the tool.
<br/>

### Context of work
<br/>

>My tool aims to simulate a tremor during an intense effort, or a neurodegenerative disease.
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

### Capture Motion
>In this part we have worked with colleagues @Jade Cothenet from Sherbrooke. They have sent us vides of patients and thanks to the DeepMotion software we can obtain skeletons that we can implement in our prototype.

<video controls>
  <source src="{{ site.baseurl }}/img/portfolio/v1.mp4" type="video/mp4">
</video>

### FaceWare
In this section we use Faceware software to link the facial expressions to the Metahuman. To do this, with the @Baptiste Krecina ' works, we use a facial expression database to transpose the expressions onto a mesh in Faceware, and then send this mesh to Unreal to apply them to the metahumans.Thank's to this implementation, we can animate the faces of metahumans.
<img src = "{{ site.baseurl }}/img/portfolio/fw1.png" class = "img-responsive" alt = "Online Training">
<img src = "{{ site.baseurl }}/img/portfolio/fw3.png" class = "img-responsive" alt = "Online Training">

## Face Custom Tool

>In this section we'll look at a tool that allows you to customise a metahuman's face. It will be used to offer more diversity in the profiles, which will make it easier for the artificial intelligence to learn. In fact, this tool will make it possible to have more different faces representing emotions (via FaceWare).

>This is done entirely using blueprints, so we can change the colour of the eyes, the texture of the skin, the assets of the hair, beard and eyebrows, as well as the colour of the latter. As you can see from the following images.

>Example of different faces:
<img src = "{{ site.baseurl }}/img/portfolio/f1.png" class = "img-responsive" alt = "Online Training">
<img src = "{{ site.baseurl }}/img/portfolio/f2.png" class = "img-responsive" alt = "Online Training">
<img src = "{{ site.baseurl }}/img/portfolio/f3.png" class = "img-responsive" alt = "Online Training">
<img src = "{{ site.baseurl }}/img/portfolio/f4.png" class = "img-responsive" alt = "Online Training">
