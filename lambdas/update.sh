#!/bin/bash
zip my-function.zip lambda_function.py

aws lambda update-function-code \
    --function-name lc_readContact \
    --publish \
    --zip-file fileb://my-function.zip