const Transaction = require('../db/transaction.Schema');

module.exports = {
    getTransactionByIdUser: (data, CallBack)=>{
        Transaction.find({buyer: data})
            .then((history, err)=>{
                if(err){
                    return CallBack(null, true)
                }else{
                    return CallBack(history, false)
                }
            })
    },
    getTransaction: (CallBack)=>{
        Transaction.find()
            .then((history, err)=>{
                if(err){
                    return CallBack(null, true)
                }else{
                    return CallBack(history, false)
                }
            })
    },
    addTransaction: (data, CallBack)=>{
        const NewTransaction = new Transaction(data)
        NewTransaction.save()
            .then((err)=>{
                if(err){
                    return CallBack(false)
                }else{
                    return CallBack(true)
                }
            })
    }
}