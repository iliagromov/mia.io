var getId = new URL(window.location.href).searchParams.get('id');
console.log("🚀 ~ file: subscription.component.js:2 ~ getId:", getId);

if (getId) {
    paypal.Buttons({
        createSubscription: function (data, actions) {

            return actions.subscription.create({
                'plan_id': null // Creates the subscription
            });

        },

        onApprove: function (data, actions) {
            alert('You have successfully subscribed to ' + data.subscriptionID); // Optional message given to subscriber
        }   

    })
    .render('#paypal-button-container');

}
