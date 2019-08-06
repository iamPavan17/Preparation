var user = {
    id: 16,
    username: 'smith',
    email: 'smith@gmail.com',
    order: [
        {
            id: 71,
            order_number: 'DCT-123',
            order_total: 12000,
        },
        {
            id: 71,
            order_number: 'DCT-345',
            order_total: 7000,
        },
        {
            id: 71,
            order_number: 'DCT-321',
            order_total: 2000,
        }
    ]
};

let total = 0;
user.order.forEach(function(order) {
    total += order.order_total;
});

var result = user.order.reduce(function(total, a) {
    return total + a.order_total;
}, 0);

console.log(result)

if(total > 10000) {
    console.log('Prime User');
} else {
    console.log('Non-Prime User');
}

// console.log(user.order)