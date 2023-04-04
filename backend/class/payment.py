from enum import Enum
class Payment :
    def __init__(self,Payment_status,Date_time,Transaction_id,order):
        self.Payment_status = Payment_status
        self.Date_time = Date_time
        self.Transaction_id = Transaction_id
        self.cost=order._Total_Cost
    def get_transaction_id(self) :
        return self.Transaction_id
    def return_payment(self) :
        print('send request to system')
        print('returned payment')
        self.Payment_status="CANCELLED"


class cash(Payment) :
    def __init__(self,Cash_Tendered) :
        self.Cash_Tendered = Cash_Tendered
    

class credit_debit_card(Payment) :
    def __init__(self,Card_number,Name,Cvv) :
        self.Card_number = Card_number
        self.Name = Name
        self.Cvv = Cvv

class PaymentStatus(Enum) :
    UNPAID, COMPLETED, DECLINED, CANCELLED \
    = 1, 2, 3, 4
