// Author Hassan 
// 12 22 2022
let bg = document.querySelector('.bg')
let bgi = document.querySelector('.bgi')
let c = document.querySelector('.close')
let p = document.querySelectorAll('.bgi p')
let trash = document.querySelector('.trash')
let disk = document.querySelector('.disk')
let file = document.querySelector('.file')
let home = document.querySelector('.home')
let x = document.querySelector('#x')
let i1 = document.querySelector('#i1')
let i2 = document.querySelector('#i2')
let slectdown = document.querySelector(".icon")
let slect = document.querySelector('.slect-down')
let slect2 = document.querySelector('.slect-2')
let slect3 = document.querySelector('.slect-3')
let sound = document.getElementById('ri2')
let s = document.getElementById('ri4')
let start_btn = document.getElementById('start')
let start_slect = document.querySelector('.start-button-off')

bg.addEventListener('click',()=>{
    bgi.classList.add('open')
})
c.addEventListener('click',()=>{
    bgi.classList.remove('open')
})
file.addEventListener('click',()=>{
    home.className = 'open-app'
    x.className = 'open-app'
   
})
trash.addEventListener('click',()=>{
    home.className = 'open-app'
    x.className = 'open-app'
})
disk.addEventListener('click',()=>{
    home.className = 'open-app'
    x.className = 'open-app'
   
})
i1.addEventListener('click',()=>{
    home.className = 'open-app'
    x.className = 'open-app'
   
})
i2.addEventListener('click',()=>{
    home.className = 'open-app'
    x.className = 'open-app'
   
})
x.addEventListener('click',()=>{
    home.className = 'home'
    x.className = 'n'
})

Array.from(p).forEach((e)=>{
    e.addEventListener('click',()=>{
        document.body.style.background = `url(${e.innerHTML})no-repeat center center/cover`
    })
})
let app = document.getElementById('i5')
let tirminal = document.querySelector('.tirminal')
let c2 = document.getElementsByClassName('cancel')[0]
let inp = tirminal.getElementsByTagName("input")[0]
let outofinp = tirminal.querySelector(".result-out")
app.addEventListener('click',()=>{
    tirminal.style.display = 'flex'

})
c2.addEventListener('click',()=>{
    tirminal.style.display = 'none'
})
inp.addEventListener("keyup",(ent)=>{
    if(ent.key === "Enter"){
        if(inp.value === "ls"){
            outofinp.innerHTML = " The most frequently used command in Linux to list directories."
        }
        if(inp.value === "pwd"){
            outofinp.innerHTML = "Print working directory command in Linux." 
        }
        if(inp.value === "cd"){
            outofinp.innerHTML = "Linux command to navigate through directories." 
        }
        if(inp.value === "mkdir"){
            outofinp.innerHTML = "Command used to create directories in Linux." 
        }
        if(inp.value === "mv"){
            outofinp.innerHTML = "Move or rename files in Linux." 
        }
        if(inp.value === "cp"){
            outofinp.innerHTML = "Similar usage as mv but for copying files in Linux." 
        }
        if(inp.value === "rm"){
            outofinp.innerHTML = "Similar usage as mv but for copying files in Linux." 
        }
        if(inp.value === "touch"){
            outofinp.innerHTML = " Create blank/empty files." 
        }
        if(inp.value === "q" || inp.value === "quit" || inp.value === "exit"){
            tirminal.style.display = 'none'
            inp.value === ""
        }
        if(inp.value === "common commands"){
            outofinp.innerHTML = 
            `ls - The most frequently used command in Linux to list directories
            pwd - Print working directory command in Linux
            cd - Linux command to navigate through directories
            mkdir - Command used to create directories in Linux
            mv - Move or rename files in Linux
            cp - Similar usage as mv but for copying files in Linux
            rm - Delete files or directories
            touch - Create blank/empty files
            ln - Create symbolic links (shortcuts) to other files
            cat - Display file contents on the terminal
            clear - Clear the terminal display
            echo - Print any text that follows the command
            less - Linux command to display paged outputs in the terminal
            man - Access manual pages for all Linux commands
            uname - Linux command to get basic information about the OS
            whoami - Get the active username
            tar - Command to extract and compress files in Linux
            grep - Search for a string within an output
            head - Return the specified number of lines from the top
            tail - Return the specified number of lines from the bottom
            diff - Find the difference between two files
            cmp - Allows you to check if two files are identical
            comm - Combines the functionality of diff and cmp
            sort - Linux command to sort the content of a file while outputting
            export - Export environment variables in Linux
            zip - Zip files in Linux
            unzip - Unzip files in Linux
            ssh - Secure Shell command in Linux
            service - Linux command to start and stop services
            ps - Display active processes
            kill and killall - Kill active processes by process ID or name
            df - Display disk filesystem information
            mount - Mount file systems in Linux
            chmod - Command to change file permissions
            chown - Command for granting ownership of files or folders
            ifconfig - Display network interfaces and IP addresses
            traceroute - Trace all the network hops to reach the destination
            wget - Direct download files from the internet
            ufw - Firewall command
            iptables - Base firewall for all other firewall utilities to interface with
            apt, pacman, yum, rpm - Package managers depending on the distro
            sudo - Command to escalate privileges in Linux
            cal - View a command-line calendar
            alias - Create custom shortcuts for your regularly used commands
            dd - Majorly used for creating bootable USB sticks
            whereis - Locate the binary, source, and manual pages for a command
            whatis - Find what a command is used for
            top - View active processes live with their system usage
            useradd and usermod - Add new user or change existing users data
            passwd - Create or update passwords for existing users`
            
            outofinp.classList.add("small-font")
            outofinp.style.color = "rgb(117, 228, 87)"
            outofinp.style.overflow = "scroll"
        }
        else{
            outofinp.classList.remove("small-font")
        }
        
    }

    if(inp.value === "" && ent.key === "Enter" || inp.value === "clear" && ent.key === "Enter"){
        outofinp.innerHTML = ""
    }
})
slectdown.addEventListener('click',()=>{
    slect.classList.toggle('open-slect')
})
sound.addEventListener('click',()=>{
    slect2.classList.toggle('open-slect')
})
s.addEventListener('click',()=>{
    slect3.classList.toggle('open-slect')
})

slect.addEventListener('click',()=>{
    tirminal.style.display = 'flex'
})
start_btn.addEventListener('click',()=>{
    start_slect.classList.toggle('start-button-open')
})

setInterval(()=>{
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let time = document.querySelector('.time')
    time.innerHTML = `${h}:${m}`
})


