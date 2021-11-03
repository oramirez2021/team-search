import json
import boto3
import logging

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("lc_contacts")
logging.info("descargando contactos")

def lambda_handler(event, context):
    response = table.scan()
    items = response["Items"]

    return {
        "statusCode":200,
        "headers":{
            "Access-Control-Allow-Origin" : "*"
        },
        "body":json.dumps(items)
}
