


const initialState = [
    {currency: 'usd',value: '0.00', ruble: '0.00'},
    {currency: 'rub', value: '0.00', ruble: '0.00'},
    {currency:'eur', value: '0.00', ruble: '0.00'},
    {currency:'btc', value: '0.00000000', ruble: '0.00'},
    {currency:'usdt', value: '0.00', ruble: '0.00'},
    {currency:'eth', value: '0.00000000', ruble: '0.00'},
    {currency:'bch', value: '0.00000000', ruble: '0.00'},
    {currency:'ltc', value: '0.00000000', ruble: '0.00'},
    {currency:'dash', value: '0.00000000', ruble: '0.00'},
    {currency:'xrp', value: '0.000000', ruble: '0.00'},
    {currency:'doge', value: '0.00000000', ruble: '0.00'},
    {currency:'trx', value: '0.000000', ruble: '0.00'},
]


export function financeMoneyReducer (state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

