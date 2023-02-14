print("Hello World")

my_list = ["McClurkin", "Daniel", "Esther", "deMark", "Zion"]
my_list.sort()
print(my_list)

my_list.sort(key = lambda x: x.lower())

print(my_list)

upper = [x.upper() for x in my_list]

print(upper)
