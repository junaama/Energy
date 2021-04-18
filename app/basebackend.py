import os
import pymongo
import json

def dummy(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    if request.method == 'OPTIONS':
        # Allows GET requests from origin https://mydomain.com with
        # Authorization header
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Max-Age': '3600',
            'Access-Control-Allow-Credentials': 'true'
        }
        return ('', 204, headers)

    # Set CORS headers for main requests
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    }

    # request_json = request.get_json()
    mongostr = os.environ.get('MONGOSTR')
    client = pymongo.MongoClient(mongostr)
    db = client["energymon"]


    col = db.readings


    times = []
    grids = []
    powers = []
    temps = []
    maxid = 0
    
    for x in col.find().sort("id", -1).limit(40):

        powers.append(x['power'])
        grids.append(x['grid'])
        times.append(x['ts'])


        
        # pm1.append(x["pm1"])
        # pm2_5.append(x["pm2-5"])
        # pm4.append(x["pm4"])
        # pm10.append(x["pm10"])
        # nc0_5.append(x["nc0-5"])
        # tps.append(x["tps"])
        # tem.append(x["temperature"])
        # hum.append(x["humidity"])
        # times.append(x["ts"])
        
        maxid +=1

        # pulse = x['pulse']
        # spo2 = x['spo2']
        # temp = x['temp']




        

    
    
    retjson = {}

    retjson['power'] = powers
    retjson['grid'] = grids
    retjson['time'] = times
    # retjson['pm1'] = pm1
    # retjson['pm2-5'] = pm2_5
    # retjson['pm4'] = pm4
    # retjson['pm10'] = pm10
    # retjson['nc0-5'] = nc0_5
    # retjson['typical particle size'] = tps
    # retjson['temperature'] = tem
    # retjson['humidity'] = hum
    # retjson['timestamps'] = times
    
    retjson['mongoresult'] = str(maxid)

    return json.dumps(retjson)


    retstr = "action not done"

    if request.args and 'message' in request.args:
        return request.args.get('message')
    elif request_json and 'message' in request_json:
        return request_json['message']
    else:
        return retstr
