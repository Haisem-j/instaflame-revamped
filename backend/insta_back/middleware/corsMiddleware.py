class corsMiddleware(object):
    def __init__(self, get_response):
        self.get_response = get_response

    def process_response(self, req, resp):
        print('cors first')
        resp["Access-Control-Allow-Origin"] = "*"
        return resp