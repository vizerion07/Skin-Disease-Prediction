
# Skin Disease Prediction

While I was reading about CNN's in Tensorflow, I decided to try it hands on and found this dataset on Kaggle. This repo is about application of a CNN model in classification of images


# Project Need

Skin is the organ where changes can be first visible so I thought to monitor or detect some skin diseases early on could solve the problem
# Installation

1. Clone the project into your required folder

2. Install dependencies

3. In your terminal type 

python main.py 

4. Click on the right hand box and upload any image. On clicking the detect button , you will be able to see the prediction

# In Case there is some issue while running it on MacBook, Try creating a virtual evironment, manually activating it.

python -m venv venv
venv\Scripts\activate

# Again install dependencies
# then run these 

source ./venv/bin/activate
pip install flask

# But if the virtual environment is stillnot active

run these ->

source ./venv/bin/activate
venv/bin/python3 main.py
# Libraries and Tools Used

- Tensorflow - Constructing the CNN
- Javascript - For image and form handling
- Flask - Used for routing
