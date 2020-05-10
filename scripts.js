// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", () => {
    const btnTakeoff = document.getElementById('takeoff');
    const btnLanding = document.getElementById('landing');
    const btnMissionAbort = document.getElementById('missionAbort');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight')
    const btnArray = document.getElementsByTagName('button');
    const shuttle = document.getElementById('rocket');
    shuttle.style.top = '250px';
    shuttle.style.left = '0px';
    let buttonDown;
    let buttonLeft;
    let buttonRight;

    btnTakeoff.addEventListener('click', () => {
        if (window.confirm('Confirm that the shuttle is ready for takeoff.')) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            const currentHeight = Number(spaceShuttleHeight.innerHTML);
            spaceShuttleHeight.innerHTML = currentHeight + 10000;
            shuttle.style.top = '240px';
        };
    });

    btnLanding.addEventListener('click', async () => {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        landShuttle();
    });

    btnMissionAbort.addEventListener('click', () => {
        if (window.confirm('Confirm that you want to abort the mission.')) {
            flightStatus.innerHTML = 'Mission aborted.';
            landShuttle();
        };
    });

    for (let i = 0; i < btnArray.length; i++){
        switch (btnArray[i].innerHTML) {
            case 'Up':
                btnArray[i].addEventListener('click', () => {
                    if (flightStatus.innerHTML == 'Shuttle in flight.') {
                        const topVal = shuttle.style.top.replace('px', '');
                        if (topVal > 0) {
                            const currentHeight = Number(spaceShuttleHeight.innerHTML);
                            spaceShuttleHeight.innerHTML = currentHeight + 10000;
                            shuttle.style.top = (Number(topVal) - 10) + 'px';
                        };
                        console.log(topVal);
                    };
                });
                break;
            case 'Down':
                buttonDown = btnArray[i];
                btnArray[i].addEventListener('click', async() => {
                    if (flightStatus.innerHTML == 'Shuttle in flight.') {
                        const topVal = shuttle.style.top.replace('px', '');
                        if (topVal < 250) {
                            const currentHeight = Number(spaceShuttleHeight.innerHTML);
                            spaceShuttleHeight.innerHTML = currentHeight - 10000;
                            shuttle.style.top = (Number(topVal) + 10) + 'px';
                        };
                        console.log(topVal);
                    };
                });
                break;
            case 'Right':
                buttonRight = btnArray[i];
                btnArray[i].addEventListener('click', () => {
                    if (flightStatus.innerHTML == 'Shuttle in flight.') {
                        const leftVal = shuttle.style.left.replace('px', '');
                        if (leftVal < 300) {
                            shuttle.style.left = (Number(leftVal) + 10) + 'px';
                        };
                        console.log(leftVal);
                    };
                });
                break;
            case 'Left':
                buttonLeft = btnArray[i];
                btnArray[i].addEventListener('click', () => {
                    if (flightStatus.innerHTML == 'Shuttle in flight.') {
                        const leftVal = shuttle.style.left.replace('px', '');
                        if (leftVal > -300) {
                            shuttle.style.left = (Number(leftVal) - 10) + 'px';
                        };
                        console.log(leftVal);
                    };
                });
                break;
        }
    }

    function landShuttle () {
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = 0;
        shuttle.style.top = '250px';
        shuttle.style.left = '0px';
    };
});

