import requests

url = 'http://localhost:9000/add-user'

correct_payload = {'id': 1, 'fname': 'rogie', 'lname':  'duran',
                   'address1': 'asdasd@gmail.com', 'email': 'asdasd@gmail.com',}

# Output => OK
r = requests.post(url, data=correct_payload)
print(r.text)
