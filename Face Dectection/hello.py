import csv

# the with keyword automatically closes the file.
with open("phonebook.csv", "a") as file:
    name = input("Name: ")
    number = input("Number: ")

    writer = csv.writer(file)
    writer.writerow([name, number])
