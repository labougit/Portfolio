---
layout: default
modal-id: 11
date: 2022-05-22
img: i_cnn.jpg
alt: image-alt
project-date: Mai 2022
client: Image Processing
category: Computer Science
description: Creation of an image classification learning process. In our case, we decided to classify human faces according to their emotions.
---
## CNN choice of learning model
<br/>
>In this project we have to build a robust learning model to classify emotions.
<br/>

### Datasets
<br/>
>Here we are working with a set of images of size 48x48 in shades of gray with a color depth of 8.
Number of total images: 6168.
<img src = "{{ site.baseurl }}/img/portfolio/cnn_im.png " class = "img-responsive" alt = "Online Training">

>> _Learning set_ :
>> Examples: 4273
Class: angry, happy, sad, surprised
Class distribution:
- 598 angry
- 1310 happy
- 759 sad
- 1606 surprised<br/>

>>_Test set_ :
Examples: 1895
Class: angry, happy, sad, surprised
Class distribution:
- 175 angry
- 571 happy
- 318 sad
- 831 surprised
</br>

### Learning model
>In the context of learning a multi-class classification model, we decide to use an NN type classifier (neural networks).
To do this we will use:
_An NN using a gradient histogram descriptor._
_A CNN codes using convolutional neural networks._
- For the descriptor and the NN we used the libraries: tensorflow, Keras, py.opencv, matplotib
descriptor language: python
classifier language: R
- For the CNN classifier we used the libraries: tensorflow, matplotlib, plotly.express, sklearn, seaborn
descriptor language: python
classifier language: python
Our goal is to implement two classifiers and analyze their performance

#### Descriptor
>_Gradient orientation histogram descriptor_
>>For our first descriptor we have chosen to extract the gradient orientations of each image articulated in the format of a histogram.
<br/>
<br/>
The extraction of these attributes was performed using py.opencv. By convolution of gradient orientation filter, we generate a table showing the amount of orientation from 0° to 180°.
Then we quantify our histogram allowing the extraction of 10 attributes for each image. This is then saved in a .txt file containing one by one each of the attributes of all the images. For the sake of simplicity we assign a number of [1,...,4] for the classes [angry,..., surprised].
<img src = "{{ site.baseurl }}/img/portfolio/hog.png " class = "img-responsive" alt = "Online Training">

<br/>
Finally, we obtain this type of .txt file which is then used in R.
<img src = "{{ site.baseurl }}/img/portfolio/txt.png " class = "img-responsive" alt = "Online Training">

#### NN classifier
> _Hyperparameter_
- Activation function read back in input with 10 attributes
- 5 hidden layers with replay function
- Softmax output function with 4 neurons corresponding to our 4 classes (a generalization of the sigmoid function has several classes)
- Adam optimization function (improvement of gradient descent adapted to deep learning)
- Loss function: Categorical_crossentropy because we have several classes
- 400 epochs
- Batch size: 10
- Option view_metrics = F to speed up learning
>_NN learning result and test_
<img src = "{{ site.baseurl }}/img/portfolio/matrix_1.png " class = "img-responsive" alt = "Online Training">

>We therefore observe a high error rate on the test set, which can be explained by the fact that some emotions are very similar.
Therefore, during the extraction of the gradient orientation, the result of the attributes between the emotions Angers and Sad are subtly close (Happy and Surprised respectively)
It is therefore the choice of our descriptor that makes our classifier less efficient and not the opposite.

#### CNN classifier
> _CNN_
>>For our second descriptor we use Convolutional Layers and Pooling allowing the extraction of relevant attributes while downsampling.
This choice of descriptors/classifiers seemed relevant to us and promised us much better results. Through the neural network, the kernel weights of the convolution layer filters would scale well to our expectations.
Despite the complexity of its implementation and the learning time, we still chose this descriptor to get the best possible results.
<img src = "{{ site.baseurl }}/img/portfolio/CNN.png " class = "img-responsive" alt = "Online Training">

> _Hyperparameter_
- Inceptionv3 function (image recognition)
- Average Pooling Layer
- Read-back activation function
- Softmax output function with 4 neurons corresponding to our 4 classes (a generalization of the sigmoid function has several classes)
- Optimization function SGD (Stochastic gradient descent which allows to have a convergence without going through all the examples)
- Loss function: Categorical_crossentropy because we have several classes
- 30 epochs
- Batch size: 64
- Early Stopping to avoid too long treatment

>_CNN learning result and test_
<img src = "{{ site.baseurl }}/img/portfolio/matrix_2.png " class = "img-responsive" alt = "Online Training">

>We therefore observe a low error rate on the test set which can be explained by the complexity of the descriptor.
Through adaptive learning (during backpropagation) to data types, the main strength of CNN lies in the scalability of the convolution layers. So we managed to go from an Accuracy of 0.3 to 0.98 for the Test set.
For time reasons we could not improve our CNN because learning takes about 2 hours.



