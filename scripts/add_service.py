import sys, json, os

target = 'src/data/services.json'
items = []
if os.path.exists(target):
    with open(target, 'r', encoding='utf-8') as f:
        items = json.load(f)

data = json.loads(sys.argv[1])
items.append(data)

with open(target, 'w', encoding='utf-8') as f:
    json.dump(items, f, indent=2)
print(f'Total services: {len(items)}')
