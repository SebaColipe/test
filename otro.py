from flask import Flask, make_response, request

app = Flask(__name__)

def transform(text_file_contents):
    return text_file_contents.replace("=", ",")


@app.route('/')
def form():
    return """
        <html>
            <body>
                <h1>Transform a file demo</h1>

                <form action="/transform" method="post" enctype="multipart/form-data">
                    <input type="file" name="data_file" />
                    <input type="submit" />
                </form>
            </body>
        </html>
    """

@app.route('/transform', methods=["POST"])
def transform_view():
    request_file = request.files['data_file']
    if not request_file:
        return "No file"

    file_contents = request_file.stream.read().decode("utf-8")
    
    #import excel_python
    
    #excel_python.extraer_info(file_contents, "algooo.xlsx")
    #result = excel_python.extraer_info(file_contents,"result.xlsx")
    #print(result)
    result = transform(result)
    response = make_response(result)
    response.headers["Content-Disposition"] = "attachment; filename=result.xlsx"
    return response
app.run()