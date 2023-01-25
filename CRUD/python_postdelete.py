import requests

url = 'http://localhost:3000/delete-user'

correct_payload = {'id': '4'}

# Output => OK
r = requests.post(url, data=correct_payload)
print(r.text)
