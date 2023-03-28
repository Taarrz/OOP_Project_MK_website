class MkDelivery():
    def __init__(self):
        self.__user_list = []
        self.__product_list = []

    def add_user(self, user):
        self.__user_list.append(user)

    def add_product(self, product):
        self.__product_list.append(product)

    @property
    def user(self):
        return self.__user_list

    def getproduct(self, name):
        for p in self.__product_list:
            if p.name == name:
                return p
    def search_product(self,keyword):
        product_search = []
        for i in self.__product_list:
            if keyword in i.name:
                product_search.append(i)
        for i in product_search:
            print(i.__dict__)