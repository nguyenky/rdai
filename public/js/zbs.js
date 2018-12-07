const Zbs = ZbsAPI.create(ZbsAPI.TESTNET_CONFIG);
const RDA_ASSETID= "C2YA1u2GzpXh4DRnPpEoBmuSASSkurvarRjEuWzNy5t9"
var ZbsRdai = {
    
    getPublicAddress: function() {
        // Return promise here to substitute when address fetch is async
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                // hardcoded temp
                resolve("3NC1uRXzLaQafk8HC15JDaYBk8GbDdtBVgs");
            }, 500);
        });
    },

    getBalance: function() {
        return this.getPublicAddress().then((address) => {
        return Zbs.API.Node.assets.balance(address, RDA_ASSETID);
    })},

    getRecentTransactions: function() {
        return this.getPublicAddress().then((address) => {
            return Zbs.API.Node.transactions.getList(address);
    })},

    GetTransactionType: function(typeint) {
        
        
        switch(typeint) {
            case 4: return "Transfer"; 
            case 7: return "Trade";
            default: return "Other";

        }
    }

};

