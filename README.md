# hello_pyth
# my python learning progress
print("Hello, welcome to my calculator!\nYay!!!\nI'm so happy you are here")

# Building a simple calculator
# Calculator only takes in basic commands: addition, subtraction,...
# ...multiplication and division

ques = "Yes"
while True:
    ques = input("Enter \"q\" to quit, or enter \"Yes\" to continue: ").lower()
    if ques.lower() == "q":
        print("Thanks for your time!")
        break
    # Expected answers:
    exp_answ = ['q', 'yes']
    if ques not in exp_answ:
        print("Please enter a valid response! >> ")
        continue
    num1 = input("Please enter a number: ")
    num2 = input("Please enter another number: ")
    operator = input("Please enter an operator sign: ")
 
# If input includes decimal, I want answers in decimal
# Otherwise, I want whole numbers
    
# For multiplication
    if operator == "*":
        if "." in num1 or "." in num2:
            result1 = float(num1) * float(num2)
            print("Result: " + str(num1) + " * " + str(num2) + " = " + str(round(result1, 2)))
        else:
            print("Result: " + str(num1) + " * " + str(num2) + " = " + str(round((int(num1) * int(num2)), 2)))
# For Division
    elif operator == "/":
        if num2 == "0":
            print("You cannot divide by \"zero\"")
            continue
        result = float(num1) / float(num2)

        if result.is_integer():
            round_result = round(result)
            print("Result: " + str(num1) + " / " + str(num2) + " = " + str(round_result))
        else:
            round_result2 = round(result, 2)
            print("Result: " + str(num1) + " / " + str(num2) + " = " + str(round_result2))
# For addition
    elif operator == "+":
        if "." in num1 or "." in num2:
            result3 = float(num1) + float(num2)
            print("Result: " + str(num1) + " + " + str(num2) + " = " + str(round(result3, 2)))
        else:
            result4 = round((int(num1) + int(num2)), 2)
            print("Result: " + str(num1) + " + " + str(num2) + " = " + str(result4))
# For subtraction
    elif operator == "-":
        if "." in num1 or "." in num2:
            result3 = float(num1) - float(num2)
            print("Result: " + str(num1) + " - " + str(num2) + " = " + str(round(result3, 2)))
        else:
            result5 = round((int(num1) - int(num2)), 2)
            print("Result: " + str(num1) + " - " + str(num2) + " = " + str(result5))
    else:
        print("Please enter a valid number/operator!")
