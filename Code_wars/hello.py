class Dinglemouse(object):
    
    def __init__(self):
        self.name = None
        self.age = None
        self.sex = None
        self.order = []  # to keep the order of attribute settings
    
    def setAge(self, age):
        self.age = age
        if 'age' not in self.order:
            self.order.append('age')
        return self
        
    def setSex(self, sex):
        self.sex = sex
        if 'sex' not in self.order:
            self.order.append('sex')
        return self
        
    def setName(self, name):
        self.name = name
        if 'name' not in self.order:
            self.order.append('name')
        return self
        
    def hello(self):
        result = ["Hello."]
        for attr in self.order:
            if attr == 'name':
                result.append(f"My name is {self.name}.")
            elif attr == 'age':
                result.append(f"I am {self.age}.")
            elif attr == 'sex':
                result.append(f"I am {'male' if self.sex == 'M' else 'female'}.")
        return " ".join(result)
