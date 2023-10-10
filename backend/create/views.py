from django.shortcuts import render
from django.http import HttpResponse
import openai
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

import os
from dotenv import load_dotenv

from gradio_client import Client
import cloudinary
import cloudinary.uploader

class Create(APIView):
    load_dotenv()

    API_KEY = os.getenv("API_KEY")
    API_SECRET = os.getenv("API_SECRET")

    def post(self, request):
        prompt = request.data['prompt']
        cloudinary.config( 
            cloud_name = "dqtt1tmgo", 
            api_key = self.API_KEY, 
            api_secret = self.API_SECRET
        )
        client = Client("https://airtistdesign-stablediffusionapi-rev-animated.hf.space/")
        result = client.predict(
                        prompt,	
                        api_name="/predict"
        )
        upload_res = cloudinary.uploader.upload(result, public_id = "")
        url = upload_res['secure_url']
        return Response({"prompt": prompt, "result": url}, status=status.HTTP_200_OK) if result else Response({"error": "error"}, status=status.HTTP_400_BAD_REQUEST)

