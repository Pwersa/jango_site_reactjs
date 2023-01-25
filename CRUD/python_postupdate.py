import requests

url = 'http://localhost:3000/update-user'

correct_payload = {'change': 'TNA', 'id':  '5'}

# Output => OK
r = requests.post(url, data=correct_payload)
print(r.text)
