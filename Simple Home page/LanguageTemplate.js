import React from 'react'
import Fade from 'react-reveal/Fade';

const languageSet1 =[
    {
        LanguageName:"https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw",
        Description:"The language for building web pages",
        Button:<button className='btn btn-success mt-3 mb-5'>Learn HTML</button>,
    },
    {
        LanguageName:"data:image/jpeg;base64,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",
        Description:"The language for styling web pages",
        Button:<button className='btn btn-success mt-3 mb-5'>Learn CSS</button>,
    },
    {
        LanguageName:"https://res.cloudinary.com/practicaldev/image/fetch/s--_pyWGSyD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/w9u60357jk4ozdho7urq.jpg",
        Description:"The language for programming web pages",
        Button:<button className='btn btn-success mt-3 mb-5'>Learn JAVASCRIPT</button>,
    },
];

const languageSet2 =[
    {
        LanguageName:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Logo_jQuery.svg/1200px-Logo_jQuery.svg.png",
        Description:"The language for building web pages",
        Button:<button className='btn btn-success mt-3 mb-5'>Learn JQUERY</button>,
    },
    {
        LanguageName:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hsDMIjDvaEjH-JjIpaEDvKBDCwvXyPJdeQ&usqp=CAU",
        Description:"The language for styling web pages",
        Button:<button className='btn btn-success mt-3 mb-5'>Learn BOOSTRAP</button>,
    },
    {
        LanguageName:"data:image/png;base64,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",
        Description:"The language for programming web pages",
        Button:<button className='btn btn-success mt-3 mb-5'>Learn MYSQL</button>,
    },
    {
        LanguageName:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
        Description:"The language for building web pages",
        Button:<button className='btn btn-success mt-3 mb-5'>Learn PHP</button>,
    },
    {
        LanguageName:"https://www.nicepng.com/png/detail/893-8937286_python-logo.png",
        Description:"The language for styling web pages",
        Button:<button className='btn btn-success mt-3 mb-5'>Learn PYTHON</button>,
    },
    {
        LanguageName:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR8AAACvCAMAAADzNCq+AAAA+VBMVEX///8zMzNon2M+hj0uLi5rv0dZWVlzqmMrKyt1rGRxqGF2rmN3sGNtpV94sWJhm1xbmFV5tGF3tl0jIyN3d3dmn1tkZGR1t1lyuVWpqamwy65jmlhwu1FVlE72+vaqx6e+07zs8+xOkEk5OTkfHx8XFxd/f38ODg5WmkxISEgxgTAAAAB+rHrJycnl5eWcnJxYoknv7++7u7tWmU13qHPc59vo6OhPT0/Z2dmWupOysrJYpUjj7OLN3syVlZVubm4lfCOOtouGtn6HvXyZwI6wz6dop1LK38Sbx4yCwGu12alfuzSe0YxlvT6BrndTkE9UqEBFjz9ClzTcvb9iAAANQ0lEQVR4nO2da2OayhaGUUxqL27otqYNCYhGcjEmjVEaTbSp+9Ketrsnyfn/P+YAwwBzZYFmawLvhzaJMuDDmndua1BRnrbOT67O1n0Nm6x39ZqzPVn3VWyu3tUrldrRu0/rvo5Nlc+nUqk7n9d9IRsqxKdSaTZ3130pGynMp1LpHZRGzSrmUymNmqMEn8Coh+u+oA0Twac0akYUH9+oL9d9TZskhk+lclr6dCwOn/rtui9qg8ThU9te90VtkEo+cpV85Cr5yFXykavkI1fJR66Sj1wlH7lKPnKVfOQq+chV8pGr5CNXyUeuko9cJR+5Sj5ylXzkKvnIVfKRq+QjV8lHrpKPXCUfuUo+cq2Xz2T32vrXTpZLS/NZImFoeHvU7PVWk9fX+et1o72SkhTl7PAwStFYks9hzznImw/z+Sg490ry+v7++vrlS920ly9JOd926nVn+xz9thSf614zSMs7z3EZl/UmPp+zk6eAhL69ffv65YuXr/bMqrtcSd4dP6oFF3V0GNSMJficnfTCA8KyMmhy1UucsX50mPH4pNw/f//tjcfnxYvW3t5o0VmiKGW32YwuKqj5ufl8unVq8QfMlh3sGU+NPGezeZ3r8yiK9Z/3b9+GfF7t7e3po/w2FN1xJK/mTxg6QD6fHRJsFhehj0UFnOSyoR8f3v8e82ns+YR0O09Jyqcdh7prtV6PvVAIn+vIPOKjnB3YJoVL9thsBST07YOHJ8HHDyBPuWwobC7SlcpncsLD6rkIIPd1cuUITwwqIKHZ9/0P70k+DQSoldmGrpv8u5adD2sekVJdZPhOeCwqoA63IeufLR8PyedVKwTUymRDgjuehw/XPCL1TmQp+B97qSEMtqEfW1v7LJ9GGEAeIL01B9Ihmprl+FxWUsKw5ghT8C9rkBCuObcAG/q29Wt/n8sHB5AfQv+dQfDI73gWPjLziFR3PuY+FhWQakOz7z/96OHyiQLIA+TZUOrwTtRcZOeTZh6RmjVmyAE+FhUg9THrn5+/tsR84hrma2RI6ZD91KX4fMwQhvROoCzHBpL42I9fPp10PiGgVkNsQ9nuGhaXT6rxUGUkhxyXB1lDWGxD3/Z/bm3J+RA1rCWxIUBzwb00ls9kO5PD+6rjiYvz7MeiAjhbiTrfMR0ZnxYFqDWacmwo4x2PxfAZHub6hGjIMTnNRSco4Iq6EOPnr60MfDCeVqM1oivZObi5YETzOctqHlFBzq2i7OTG49kY6fPz/vEWiE+L5tNo9Mn+9Hke48Efi+QzPM3/Ab06lv9grx0ja9iie7efiU9UwxqtPtmOHea85b4oPtc5q2lYVP6DGT6D7p0J40MDaqh9crixTFRTfHaX4FM5WS0f8+4+G58wfsyi8DFNGB/KotWnyafW6zmy0jl87m6y8QlqmJmRT13qTln4eJ9QWpaUjzdWHw5lnbQmOZIL4ucOxoeoYWomPl7HS9qhgfPxnygwYWYlk5LwwXM9kk4+zWfk8TEvYHz0GFA3Cx+0miIbTYP5NCtB/+TsQDzGE/JJDtKFF8PwGY1iB0rjEwNSM/CJ5tHFszFAPol5jF1hHTlRDrinoOaaBZMMNJ/jkU/oAsgHA+rC+dSdxDqMaEIaxId8FMXwUFBH+HxqFWaS8DMvBik+fwR8RuZ+Jj66CuVTcw6JcdqQP68I4dO7ouYfvFEo5231Wy6fJmeK8SPnNAwfBOgYxsfU4/CB8Gmy68CTE04IAfhE81edhWaHP16yEVA7nfD41LmrpZwAYvkEhFAApfMJAKHwAfCp7fCu6oTzxlQ+0TvaulbVx+Fi0y1dVDDJxeHDX2zlvZHDxyd0nIGPGvIhx18cPvy7tp2LD0Jta1rVl44Wm+hHwaAJoFXyuTgOCd3D+HiAzPXxmerVUJrJ8IkmEB+Dz/EIxqdr4vBZCx8N86nqFsknkfPyKHyOb2Dx0/W0gXzCjuPq+USAunA+iNAG8SEXwFbLBxNSHzLw8QltDB/6GWar5hMQelDV/Sx8PEIbwodZuFohnz9vLkJCXoUJAuip8OmGfDgLn4/BJ3DcexgfdW18LNzAa9Vg9eTylPfwu0fg8xDweQDyUdfFR1FmA4+QFo0wPvEyN1bK5+YmCh9VvdlYPpUKfnFeNXlrk4/Hx9MD7vPtfwDxUWF8KnVOIvduvvFpLc7GTMtjWzkfHD6qegGLHygftm3hz/xB4geeFL5KPvc+HzUWMH5UIB+qb3IumDmGzR/WgUnhq+ZzkeBzDOSjmjA+RFKEMK0MOv8MSwpfNR9VpQIIwqdrAvlEYyNJPit8/QKSFL5SPvf3DwSfByAfL4CgfCoV52pyJstnzbD+Bdhaslo+ZPioKrB+eQ4E5+Mv6klfzrJ+mrq1ZLV8Hig+D0A+ahY+Kcq4vlyX73Bbrf+otL4C+YD9Z+V8UmwIzoe9ZIYPg8erYTA+6fMbj8dHakMcPqfc3NRD9jwUnx//4/D5CuPzxSaKul0iP6pOLnScQRL16o7Ihhg+tVNu/riisG0Gxcfq9zmAQHz6Gnmuy6P8fI6occgVKMFFZEM0H4deWYzFLFNTfBRr8IXlc5zOp/9lSp8LvJuJVo3N7j+EJWjybYjkw0mtT35+6kysUbkaS+htGp8vY84gUTR6SKHD/Q4MYFlcG0ryEWzNEJ6JZ+S2SleykZxP/06QQH+WPW29KdqsLe1QJgEwwXcS4wN9u0ZyzMxv6KZfKEK/SfiofVt8rozbHqS3F7jBjvkeH8ynJjEeUrENCQZ4nTFZybpiPn3GeAgJ8044Sr29QEtzyOYv5JNcEksVtiHhANi9I0Loq4DPA894SIF3TgBuL3Cf3SlxUMCn3kszHlKhDUkmCGyirefy6eqgDYSgfRjA2wuwIXp32wHUeKgz+TYknUBJ2tCI5WOm7PxKKNWGMnzrzrV8k6TXhFFhuNMDGw+p3WbzVHrTkjb05g3F5zhlWpyQfB9Y7eg2y+2Vbdfk7K4dfs77/JLhx7TNzPMuDqERGT/AnaexJBuY5VuOedct2uCd/yERuWVgG0ryGYF3LickShHNsOM8EnfXZnrn7zFkLVAl60Z8JFtOO64rqXWcipH7674Y0/cGqGv6arVZNSD06iXic/yXCIE71j1JfIlun2FbzQUiTH/5R/gso8CGugEfsfF0FnqQL6BpknaNsKGcT0zBSpj+kiUtL8Nr6xsvXjQa30TvaOtRNkWYLsBXNExImRaFaHKFenG8hdl/WZ4N9V9//Vv0Ms4kxQmlA0nzFgwTxPNZmXRZcXprsWVWM8OWGA/CMnajlFuJDZ3fOquzi7OzDX9AX5SGg/JMyN8EGhboWzyN0JZ1nEAfJOWk2VBRNK8SKeySPxZRs9B4tDH1vC0mqIoomdWAbOh5K4oRflOFbUinY6sYijxG3NUpsA0B26iC2pA1NRGd1AdFWgtsQwTHebudduQTlq2n95EjJfrW+E/W2Jh17OWfdLuZctONh1Q85Aj/MO6483lHGWecgnwacs3sneNwbK+Ng9/subKYGqZiDR7pEteq0HjAaxeBOsiG0MzQwFIWrmJaynPkM9ehxkPKHQch5P849neOml6LNn2Gzb7hfUwt17jT340UbNPyekN+/ASgnp0M/Ckzy/aP9CNm3lYGc6VrufKl+6cpDp/ObJZoiebtxdhv4caL9px4nx0dubC9fyy3uukTW3nE8ul09cBNfFltLZqG1jRdTzpMzEdpjw17kf7k1qcoDh9/ixri42rxjkfEyIzbOTt5pDt/ht7sS8YHd42QEKG4I2Dndq6nJBkf1MfRBm3DMNrTMappJh5GFJ6P/5IXL9GLVjsAhnuBheczjnrIWKgzGTpN4fkE4UMCWPi9SRv9XPJh+czjtq3k4/OhZ+MHg8E4/FPh+SyCABrYgmmdwvOZh1OpujaeGvMZjaLwfJRBnOHiDy60gZGcQi35KIvogWAhpuQIrOTjVbGBrpFjMC36Sr6ST/DbvD2o6noCE14DKvlEsmaubSyqeBkIvb3kQ8uyg6WgcDq26HyM6XTKrGoMqhG8ovMJGnX67XN/AIbmmYvOxw8VnV4z9qGU8RMgaPsoFtTbgwE8qnVF5+PqVcao7WACCA3Iis4HDS+0qoG3qMzsIElICycQC8+ng8enXu8w/Ldazh8m+j8zenknoFXOz0e2Y011jaIzKMenyf5zxxgHYy8NzXBME3NlJR8ky53bhtE2bGqJtBh8Eh2+UOLxF6HOgJ2+f4aa6XRyHYwPWit8jhk/lNAkaiI5cwbgE6Zowp638LRl4fRVnGPXTqwB8hWl+BYjSxzvPEFL7WgIIcllFqSIP2NFmwv0wQJFkyZ+s2EWcIsB3nkS/ife0V3YLSpGoqesiZolt8BbnKy2roU1h570we8o+hY521+iGE8FsYH3NplFMh6wCms8fLltAkPUwhXQeDhyF3pyx0rhjYdUB80URoMyI5wmM9vPfjQKU7g3B3lNvG+3NJ5INm7q23gwUT5bglBkOXhotu4L2jjhJis5tC+VFKpkGnjfbvFkjKvVxYYZz/8BgbFSXQmK13cAAAAASUVORK5CYII=",
        Description:"The language for programming web pages",
        Button:<button className='btn btn-success mt-3 mb-5'>Learn NODE JS</button>,
    },
  
];

const languageSet3 = [
    {
        LanguageName:"https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png",
        Description:"The language for programming web pages",
        Button:<button className='btn btn-success mt-3 mb-5'>Learn REACT</button>,
    },
    {
        LanguageName:"https://cdn.appdesign.dev/wp-content/uploads/2020/08/Agencia-desarrollo-Angular-JS.jpg",
        Description:"The language for programming web pages",
        Button:<button className='btn btn-success mt-3 mb-5'>Learn ANGULAR</button>,
    },
    {
        LanguageName:"https://miro.medium.com/max/900/1*OrjCKmou1jT4It5so5gvOA.jpeg",
        Description:"The language for programming web pages",
        Button:<button className='btn btn-success mt-3 mb-5'>Learn VUE JS</button>,
    },
];
function LanguageTemplate() {
    return (
        <div className="LanguageTemplate-main mt-5 pt-5">
            <h1 className="text-dark text-center display-4">Web Development Basics</h1>
            <div className="LanguageTemplate-1">
                {languageSet1.map((item) => (
                    <Fade left>
                    <div className="LanguageTemplate-1-content">                    
                        <img src={item.LanguageName} className="LanguageTemplate-1-image card-img-top"/>
                        <h3 className="text-dark" style={{display:"block",width:'70%',margin:'0.5rem auto'}}>{item.Description}</h3>
                        <p>{item.Button}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#5000ca" fill-opacity="1" d="M0,96L1440,288L1440,320L0,320Z"></path>
                        </svg>
                    </div>
                    </Fade>
                ))}
            </div>

            <h1 className="text-dark text-center display-4" style={{margin:"8rem 0 4rem 0",wordSpacing:"0.6rem"}}>Styling Framework and Backends</h1>
            <div className="LanguageTemplate-2">
                {languageSet2.map((item) => (
                    <Fade right>
                    <div className="LanguageTemplate-2-content">   
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#5000ca" fill-opacity="1" d="M0,288L30,250.7C60,213,120,139,180,101.3C240,64,300,64,360,101.3C420,139,480,213,540,240C600,267,660,245,720,208C780,171,840,117,900,106.7C960,96,1020,128,1080,165.3C1140,203,1200,245,1260,266.7C1320,288,1380,288,1410,288L1440,288L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
                        </svg>                 
                        <img src={item.LanguageName} className="LanguageTemplate-2-image card-img-top"/>
                        <h3 className="text-dark" style={{display:"block",width:'70%',margin:'0.5rem auto'}}>{item.Description}</h3>
                        <p>{item.Button}</p> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#5000ca" fill-opacity="1" d="M0,160L40,154.7C80,149,160,139,240,122.7C320,107,400,85,480,106.7C560,128,640,192,720,197.3C800,203,880,149,960,117.3C1040,85,1120,75,1200,85.3C1280,96,1360,128,1400,144L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                        </svg>
                    </div>
                    </Fade>
                ))}
            </div>
            <h1 className="text-center text-dark mb-4 display-4" style={{marginTop:"6rem",wordSpacing:"1rem"}}>Famous FrontEnd Frameworks</h1>
            <div className="LanguageTemplate-3 ">
                
                {languageSet3.map((item) => (
                    <Fade left>
                    <div className="LanguageTemplate-3-content mb-5">                    
                        <img src={item.LanguageName} className="LanguageTemplate-3-image card-img-top"/>
                        <h3 className="text-dark" style={{display:"block",width:'70%',margin:'0.5rem auto'}}>{item.Description}</h3>
                        <p>{item.Button}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#000b76" fill-opacity="1" d="M0,64L34.3,101.3C68.6,139,137,213,206,224C274.3,235,343,181,411,170.7C480,160,549,192,617,213.3C685.7,235,754,245,823,213.3C891.4,181,960,107,1029,112C1097.1,117,1166,203,1234,213.3C1302.9,224,1371,160,1406,128L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                        </svg>
                    </div>
                    </Fade>
                ))}
            </div>
        </div>
    )
}

export default LanguageTemplate
