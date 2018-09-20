rm deploy.zip
cd backend
zip -r -X deploy.zip *
mv deploy.zip ../
cd ..

aws lambda update-function-code --profile devhello --function-name sendEmailForm --zip-file fileb://deploy.zip
