const handleMouseMove = e => {
    const { clientX, clientY } = e;
    // console.log({ clientX, clientY });

    //0 - 1
    const { innerWidth, innerHeight } = window;
    const fractionX = clientX / innerWidth; // 0 - 1
    const fractionY = clientY / innerHeight; // 0 - 1

    // console.log({ fractionX, fractionY });

    const pupilX = -100 + fractionX * 100;
    const pupilY = -100 + fractionY * 100;

    console.log({ pupilX, pupilY });

    document.querySelectorAll('.pupil').forEach(eye => {
        eye.style.transform = `translate(${pupilX}%, ${pupilY}%)`;
    });
}

window.addEventListener('mousemove', handleMouseMove);

