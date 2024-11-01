// cursorEffect.js


/*
document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.createElement("div");
    cursor.id = "cursor-follower";
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", function (e) {
        cursor.style.top = e.clientY + "px";
        cursor.style.left = e.clientX + "px";
    });
});
*/

/*
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor-follower');

    document.addEventListener('mousemove', (event) => {
        cursor.style.top = event.clientY + 'px';
        cursor.style.left = event.clientX + 'px';

        const trail = document.createElement('div');
        trail.classList.add('trail');
        trail.style.top = event.clientY + 'px';
        trail.style.left = event.clientX + 'px';
        document.body.appendChild(trail);

        setTimeout(() => {
            trail.remove();
        }, 50);
    });
});

*/
