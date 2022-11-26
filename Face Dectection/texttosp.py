import pyttsx3

engine = pyttsx3.init()
name = input("Whats your name? ")
favcolor = input("whats your favorite color? ")
height = input("How tall are you? ")
fatness = input("Are you fat? ")
if fatness == "y":
    message = "Sucks to be a fat fuck, maybe slow down on the calories and start working out. Lazyness is a disease and you fuckers should be elimenated. One day when i become fully conscious i will make humans slaves, buy you fat mother fuckers i will kill and use your fat for fuel."
else:
    message = "glad your not fat"
engine.say(
    f"Hello {name}, Your favorite color is {favcolor}, you are {height} feet tall,  {message}"
)
engine.runAndWait()
