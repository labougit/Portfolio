---
layout: default
modal-id: 4
date: 2022-02-14
img: i_raytracing.jpg
alt: image-alt
project-date: Fevrier 2022
client: Computer science
category: Ray casting
description: Here I had to model a 3d scene using Phong's Physics model. This technical model is used to determine the intensity of illumination along the surface of a 3D object. Phong physics takes into account three components, the ambient component, the diffuse component and the specular component.
---
### Stage of the lighting modeling algorithm.
#### Phong model
<br/>
>We first had to configure the project and then calculate the intersection between the primary ray and the geometry in order to return the diffuse component of the material linked to the intersected triangle. Here, we had to return the diffuse component of the scene materials, which returns 2 red cubes.
<img src = "{{ site.baseurl }}/img/portfolio/cube1.png " class = "img-responsive" alt = "Online Training">

#### Diffuse lighting and shadows
<br/>
>This was to manage the diffuse lighting at the point of intersection between the ray and the geometry but also to display the shadows.
For this, we have therefore implemented the Phong method which allows us to manage the lighting as well as the shadows for all the rays of the scene. We will then use the position of the light in relation to what is lit at the level of the scene. to check if there is direct light or shadow.
<img src = "{{ site.baseurl }}/img/portfolio/cube2.png " class = "img-responsive" alt = "Online Training">

#### Cornell box with floor and ceiling
<br/>
>We now use another stage, the Cornell box with a floor and ceiling with mirrored sides. The objective here was to add the calculation of the direct specular component to our calculations.

>We will add in our sendRay method a test to see if the specular component of the material that we intersect is non-zero, we will then relaunch a ray which will be multiplied by this component.

>We also add in our phong method the taking into account of this specular component:
<img src = "{{ site.baseurl }}/img/portfolio/f.png " class = "img-responsive" alt = "Online Training">
>_Scene without and with the specular component_:
<img src = "{{ site.baseurl }}/img/portfolio/cube3.png " class = "img-responsive" alt = "Online Training">

#### Improved algorithm
<br/>
>We can also notice that by testing on larger scenes such as the boat or the robot, we realize that our algorithm is not optimal because the rendering is quite slow.
We therefore had to implement a spatial data structure to speed up the calculation of the intersection between a ray and the scene.

>So we decided to create a BVH to solve this problem. To do this, we are going to retrieve all the triangles of our scene and sort them according to the most dispersive axis. So we have a tree whose leaves are the triangles of our scene.

>The calculation time will therefore be improved thanks to the course of the BVH. We will therefore see if our rays intersect the root of the BVH which is our scene and if this is the case, we check if our ray intersects the right or left son of this root. We repeat this until we find our triangle. We therefore do not test all the triangles but only those that we encounter in the tree, not our BVH, hence the improvement in the calculation time.
<br/>
<br/>

<img src = "{{ site.baseurl }}/img/portfolio/image_r2.png " class = "img-responsive" alt = "Online Training">
<img src = "{{ site.baseurl }}/img/portfolio/image_r3.png " class = "img-responsive" alt = "Online Training">
<img src = "{{ site.baseurl }}/img/portfolio/image_r4.png " class = "img-responsive" alt = "Online Training">
<img src = "{{ site.baseurl }}/img/portfolio/image_r5.png " class = "img-responsive" alt = "Online Training">
