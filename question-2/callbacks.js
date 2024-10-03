const delayedSuccess = () => {
    setTimeout(() => {
        let success = { 'message': 'delayed success!' };
        console.log(success);
    }, 500);
};

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('delayed exception!');
        } catch (e) {
            console.error(e);
        }
    }, 500);
};

delayedSuccess();
delayedException();


const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'Promise resolved successfully!' });
        }, 500);
    });
};


const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Promise rejected with an error!'));
        }, 500);
    });
};


resolvedPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

rejectedPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
