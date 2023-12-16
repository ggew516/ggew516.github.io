async function encryptText(text, key) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    // 키 생성
    const subtleCrypto = window.crypto.subtle;
    const importedKey = await subtleCrypto.importKey(
        "raw",
        new TextEncoder().encode(key),
        { name: "AES-CBC" },
        false,
        ["encrypt"]
    );

    // 암호화
    const encryptedData = await subtleCrypto.encrypt(
        { name: "AES-CBC", iv: new Uint8Array(16) },
        importedKey,
        data
    );

    // ArrayBuffer를 Base64로 변환
    const encryptedText = btoa(String.fromCharCode(...new Uint8Array(encryptedData)));
    console.log(encryptText)

    return encryptedText;
}

async function decryptText(encryptedText, key) {
    // 키 생성
    const subtleCrypto = window.crypto.subtle;
    const importedKey = await subtleCrypto.importKey(
        "raw",
        new TextEncoder().encode(key),
        { name: "AES-CBC" },
        false,
        ["decrypt"]
    );

    // Base64를 ArrayBuffer로 변환
    const encryptedData = new Uint8Array(atob(encryptedText).split('').map(char => char.charCodeAt(0)));

    // 복호화
    const decryptedData = await subtleCrypto.decrypt(
        { name: "AES-CBC", iv: new Uint8Array(16) },
        importedKey,
        encryptedData
    );

    // ArrayBuffer를 문자열로 변환
    const decryptedText = new TextDecoder().decode(decryptedData);
    return decryptedText;
}

function go_msg(msg){
    window.location.href = `./msg.html?msg=${encodeURIComponent(msg)}`;
}

function go_msg_color(msg, color){
    window.location.href = `./msg.html?msg=${encodeURIComponent(msg)}&background=${encodeURIComponent(color)}`;
}

function enc(){
    (async () => {
        txt = '안녕 예지야.\n\n오늘은 우리가 사귄지 1200일 되는 날이야!\n\n계속 사랑해줘서 고마워 예지야.\n\n12000일에도 120000일에도!\n\n사랑해줘.\n\n사랑해 예지야.\n\n'
        key = 1509345150934515
        const encryptedText = await encryptText(txt, key);
        console.log("암호화된 텍스트:", encryptedText);
    })();
    return decryptText
}

function decryptDay1(key){
    (async () => {
        encryptedText = 'nP4rnLvUCUzwF9JYXy87aBVhF6vd6APY8/P7HxwJs5xUQBwuNmLK3LFE+earaF+xR1QQFoEZbfJeVRU6iO03N3aLaPYP2bCYCsb5DSJvOHIoVJDQgeaSxCTzwJnedE7eTQcoxA+YOo1cUmpfZeb9bmQ+nuAnrrp44r99RX7HrJNAIuBjXxFCIgi7cmLsi+Rzs3v0xkcobikQxOYzibjvPbODjzT/LWKcNXV9iozTn/6GYH8UWrV7hy3y4ryqyoyYKxn0vLwy0G7IrmT/pPsDEdEL4G3z0/GSaZC9RJATr/Fx6g2X80fkTnely0klXGCC0WfiPCZ5GYskuI3V3M85McrYcGvhBaxogoqVFo/ejunZmLtB1/mEgJY9hQORZ+t+TTcJAFjzTWHn2UyPrU+HeMr4cdzY/G76oHILOiKil4HBJa3rVKegYfqxYE7ryFq5u1eT+RLYDXBem5055dvZm2yPieAEtJ5ixAa3bebGD6hAVDSesBgjU1wU90n2yOjZZB7pIg5HZIxWzU8sFV0j+k64D6wGk+TAbyJgnT+Bmtnm4FAAVttk37io0FpDH2RwQk7guo6d/weirpg8rneQefmSY54Bk35R2uCJEmCWkTEOdHGpi5VRAaf+URYvMThDiIW/fmCyyHpSZP515/W6RQ=='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
    
}

function decryptDay2(key){
    (async () => {
        encryptedText = 'jlbnpt9rtqD5Qs1fU9fdtNl7WQY7uolYUsnvBDvi4BLBlcThD2BbvheM9MELfVsUN/mLwVjPu8mnYdUe/XSxLmQeFjiZ/lvGOLhIkAOF7X+MDWvSFI0x+g2d4hyklPOElpsIz83m+B0y9wwCZpTfDb9aCgrNd6X/twjiWDo9MmuwfgF03LOyyqz3j0lmax92NxlWIHZlMysiaEmLQ5Ch+l/M7CMyqRHxGn3TK353lJi3A5ZRPCw32aHeKrx8p/9eCbLup0ZcUpI1iWr1rkY6i5raXn2btfg7Eez1QzTeikvPCYOOMTVXmrFc3n5KBzYH1BJL0G93rlZuDKGn3ZbgxGPq2pMieIrlhv5ETu0AIj5a7FATL2KXcc05Q4oRQvJw1zQle6m4LfwOJ88TQ3wdxqQVv809DVG8CoFZGuUed9KlBo5e+aBi74lv3wdWs8rVfmCnXmIIY9EW6Yyrks2kM7JH47CN6IMCc1pAx1pXDkmFyk41tRICyXYh3RPtY8Lv9CzFRTbeQUA2OhjafO+Ot73vUQmwBdr8EWaYheaAwaM='
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
    
}

function decryptDay3(key){
    (async () => {
        console.log(key)
        encryptedText = 'RciHRUdWyLwwDq+B5tN5auex/u6J+J4jqHcbr5D4GMg16/L59kNC5MTlRat1DqoKVE+mmU0+g7uKQ4hqJgID4oJGe8US71MzQEaoBrqjDZDLCwVUZ30PhoaRlFzLw2Ciggp8tlPEFQhYb6QW66snaY/9glsYTtbGTAHjQct5KGC9ZNfNqpxGpVfHZtM6pdqIpnMdXq0M7Y9+zJwEbaYmzUDlsI1V6yuKvtfxxKC97Svp9rLa6kwp0vWFvvwPqrKltKxeEH7RnLFHlolrHI2+4qNKuYkXe4QnbYhDyLCnpmtdcdyD9fMXQV4JeJyudzHsllsq5AK0oXk2ewETXd/hOfAtGWEc64H6fqRltuSojllBS/LYAz/GHS+zr0ksjs1kKv7+ksBaFGzR/9aaK/yXiA=='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay4(key){
    (async () => {
        encryptedText = 'pHQYntyS6I9cTF9iOERlOmrQyrPTPKh90/BgnMMVgoxoquemWaGDhXZ5HS/9VW5hvzI6B8B4eYgkzOcdBm7x1G4sX3OWuon+QnKemnmvEOspIem2hWMeYiyfwg60cHLtuO1rM5F9YvP88ExaDkPA3izXCVoVGZCB5Cxk5762BfrDV0Xh4Y/JfVJ+ZobIhDmuQ46jq43VrxdCe9xsDkEnxXDvKZCHvl4eH7LJfsUwfTDm3ROuv7U9zt/MYQOOKDZ+H7pSiT61T0oz26Yw9HJGMaNzL/vZk9DIYg9foKbt+QV2iCO5tJ5FKyvDMqpG0QIa0pKOjtcdFur6hyOTQokWE0CLtXO82sQzI8F5IEeuwca3ikN3JJN2MbKnESK3X69D'
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay5(key){
    (async () => {
        encryptedText = 'xi/EFoE5OLHQqB0+UGQLuCDzuIae6eV4d9aLe36u/j3QvFBklQqjOScaa18u/Hjgl4nzq/PIQyWtevEQEUNPiwjmJzIaAqKkgMaRTYfBV5QatIwiuU3JBws9udUESu5AHSfi5H9sAGwv59XpAtO3jSnPA6UDIXCJ+/PR1tvoW4E2w7/DgfY5uqcV1yu46gfsXKEpjoByXpU1UmfoBAdozx3lG5r32P9na3P6OiJBuEbaCVd5KQRPaysmGfxZFrAyyDyje/gHG8YpOPnP3m/qo/V44/mqtmWRPgyCVR0GkDkPGoF1gvYZK7Hgc3P+YikZawlY13p5/gh5A2rpVidN7Pos4RZ0AlfM9Dmbmfwp80I='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay6(key){
    (async () => {
        encryptedText = 'vsdjfhZjC04qUZ73Mbsx0lAiMyVGz5ljm56JEYzETx/DVGIz1YzPnFjRkjTtK4+0nIfUI0nmu4yZ3eZwJZprGE7M7H0oLBUwG02x365r7/XewbdBvOzCy8e28iI+URkhSKQowNDYvuoGKayS60FQDAh6A761TsqnfzjwzQG8ldQJmevvzEuNj7DXbY1dsP7BGqflFXrGuOKSUMmfJkkPzLvqodMAVXQYgiI1CSYqKMpBnB18JqpW0DV36iIzOOGJLWDlCysMKhgeZrl2in+QcJejqANKY9c5kkD4ojpn3mSPynNqDO5LhMG+hFVf+OzplibDZXyu57bvDjo8YW1OYDpzbsb+wX4usDYPWNLM0SLmLvWx7masxLvBLp1irC+TC7wB9/UtkOApwIocVJ26S4wC1J4l9cfzj3OFBMutXlE='  
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay7(key){
    (async () => {
        encryptedText = 'pvpJ7tnqFLNfIYCtHx605Ds58T0dsEY6qLxDo98gnoYe2PxgOP5g+RAU802OVF1hYL70guQBmmkqV/PJf0vUWUQhV9pmF7NPs8lzyYccwxfc3meQmdumJ73veceGHAhgg26LBpQxTSnDcEvnhOv00w1NgfXBmc9S1FwZHa9ETprdweKW3guZfz803zlXCwCz+SJMG+o1HDSZckhQWZEv9ZcaURbwQUjTwJYEdMUMHT1/3RqG/heuMLxgpUT5fvAoCrv9RsUieHez/j+hyQBWXyx7DOjr57dGnp68aBYULkcd2hqxJoGdm5nwYjIMxfMyy1LiwiNVqo0kJDsiQHHIK8yOsQf+oRAmKXd8WZwyxpsx3TgztUZtO5iUfv3qvv57eysIE5gtSt67EPgHOC4rvjcjfSP0UU03h6sTOfPyJj6TxP+GDRKVxxK/UOipyDjF9eU/gNRIQxo74j4YAhqBxO9EKsFosp3UsGQGEbBRwBM='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay8(key){
    (async () => {
        console.log(key)
        encryptedText = 'g6Px5fyI5Ufw3f5zF6ih+LuCR4Wclmr63HJxMQEgGObWhhBj4PGBX+PAZ6+jU9aI1ADkJyuyfkiLrt7SoWi0GgACdojwQaTAkxb8DwSjMujhDMZXomSzcsIhvF0yHFNCDN2ChH7gsyQ+hoyJaPy+wJpdXuhXRMy1ADs9Vs+scbshODpRvHC0S+V40NJHTxnatgLUoedP9VFgA9wBgmOhY75h6/pZtOvzGz7OLVVmUh0hjYpdCDJnrSb+ZE5aM4Z71v5typWuikBjAJRloIeHPV16L2dzj64/GY5vcRV+VH+FSLwmxrC4uFhZQ2k3tOh9iNjda4s7fLTVT25RmnNYGO7H3Fdl3MUavVUHj1B+zsDoaLqs41WVoBxOQZc7YaX8XqYJbV1cuDhdm0VhPbEAYxfZi78q8BjXjnieIuTDNeOJ7FpFh9T/ohKjLyMh4g4dQpE9RJ5qAuOk8Dp+VBep7+DIDZagxl1/Xb+OXLRI8Nt511938qLoAaP6KlxpIqpah+iF2OYqQBAAtDEUq/Wm4UzupHjYVmFOxQIWEMg32WOBsOFUBSwHwgcMshblkgrA'  
        
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay9(key){
    (async () => {
        encryptedText = '8GWDup9eyNRGyVkXrGKdS8KePWY89MvoU255CGKFtpAbU/DTGrurYfqSVSGO85+dvJGzE30/Neoyosleo1AbgV1Zt8XYubamdoYzI03DDhsnSjSbEGJRIe88gf5IeZ/ZKa2kdGMEZpGoNBS14vo/KIp2QWuw+vw8vPKub3sBjFZ7OvGk/+uMfMHkK8GeV5DeJ2SMCDlzmiIbZCNYe6VqAJcO+mX7YzJvedJ7ps7dV7KoNzce/DrcT84ZIVKecI822OvEppAz5aNX6qzWlG54H0hfEeCJlmZzXjghpHVRplz5aCD+AxPhHtaD03nNbO6Id/oXliOl8KPz3CW3EWLC23HNPV5bE/28iya3zJ2eHNzeHpkshfpSvHFR9Tk9DiUoG2A2OB7BFkOR4Op/wcccB5NoXJW0j5L6Fnit3J1s0M4P9entt/1MKurtSM0BFO/NDtOZusX7WEpC2MXhg7XCznUkYNiEcX7l8Q7jMwKXswlgdOms/26tuiclg6hC/BAVn+or/svMlympH3gg3JJOBvrVtF4BXZkUFX2UOBJTZn1pXyv+TzkerKvEzZm9OcCjSafTJopp7ef7eGHxz8oipdDB4ZAN4/iqU/WE35k33kmt5wVXPn5vEAbmABy7KDtheaSkO0iaFaFBx83Jw6fCWopsQAs0UCQj9a8gjB+uZKOBsIcAUOfznlSbi7ZXIVOJwCWSsR6jAFaQmcBq8CS5SjSE09A184ljkw8tK/zLo+Y4cOgvDQRXqXCRX+sx+qlUT+yY81sULKiSKjb1ZAOoEzZXezUGHJygSzlQy1Hv0j9jWaRRy+CCxwIqj8Oqx7BTxcTHzqNnryZjMHc5w7egl1H4S+dY9L7jJdp6mvnee8ifk2EjdSmXOOm9kvnlazmq'  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay10(key){
    (async () => {
        encryptedText = 'v584JRPCxjqGrk+BdZ9l62l4R6F8mpExFNcX6gt7r/fEEJtq+Idxvxy62TwfQLEVPrlxhWuE4HJ8cA277Cu+b0fX0y62p3yEtEK5WqZBq64iqKlBuCq0ThRrVO5unkKBEPE3rXTMUFi2uhskWLNw9e1cU7g7dsU/HBgQ6vabYkJ5Dp2GQ7trCoSXEyGsNIQz+MbvuOJL+24t+xplQlgqqq3qAkF512jj+dIblBYbCoe6mXvDVwm1lZ7hMJDM4DSScfvhBoW8t0ps4DosxeK1FlbuMJeftYFmaGIurUekpSiNhPCy4uNG55ZHecuZRnwzoqvoL7avWW6nqOgEsIvIn+O8iXBrqA6lrsJ3Mi/JkNHmfDAWYMSU5IPJfhanfRNGQamm55s6qME6Ukrz6LXFHt611XLDL5pyP/Sx5febJMzA7F9R1q/RrA5UX2uifNLhlk1frRmNnKQbGbhGBw0eeeHwaJ9j9O+yYS2Nyy6ahdV7ol8jVY7buWH7vjmBvjy+7bxtiy5DuV/I3Jvj0wvzXysB6cgV5VmtFLLmqdWX5Y/bxr3vKUaoPIdJRs4AC4TyCsGRSU4/UKiZ0Nn0SOQM5g=='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay11(key){
    (async () => {
        encryptedText = 'dNRnJabkfsthkScYDDmK3k9jVptnbBCmlC9hbzcnx9X6IX+g9pBzyhrStA1mS+OjWGzSSgopCS6fXCUCuy0vm1tpJEnTDZP9debPWNcRXv3zkYyzz7AmZ2lMLc30HUvTOXvl+GX7yHnkwd+LAGVsaYLROJXGE2h1zFUUExRJjNUJM8YH8gHszDLn3GAnyOJpauV2eehkpr/zmxCY2sPWM8JnibsVlPKGPehZbgT5V0vMG85qK8hmzDW3C5tDOgX8MJ29ocnkB1z3jlMSpcWZuZ0Jdzm6HAPlsOCcdF0axDHY3shRkw+NkAVGgBLJlw6nRnF5OgNkbWduhctu5KXgHmMqvdib6tEpQu3E/Nwu8p6WGWYRT6l5zX9PPncVPtwxUYECX/VV1UdGHo4+j1joh89pNUlwYOtbxQgF9cIXJgw='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg_color(decryptedText, 'hotpink')
    })();
}

function decryptDay12(key){
    (async () => {
        encryptedText = 'k/aXu/ZpK5ja5mdD/pnrJYfPInjz6KtWvRmIHGNQ3C8JxNrmoeoqqzbI5opV+pvtro4dlWqCkWMf8fFegDr8kAbVZsAcS9PbL4yugfVCdIL/xNS/kdZR9C0WoLFHzuBV7V8MlLYmIkQpahYQAZFdfjdSTidZptV4GOFlHpa79eY5CFxEFRhAhqR41NeLouIgonzpU+1xPT4VUCG5bA+PPQNQNdDLSyuOyXVqfhzQ+3dgLl2wM8sVPVfezTGHumFdyDue4LLRMBf9Kc14OBOYY0X0ufiMHrEXbKbq2A/T4Gn/vyodhMRX8/AVxZZIVzNVpoXr0IHGvidetlsB69B6BQ=='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay13(key){
    (async () => {
        encryptedText = '9HgIF1vMCjgUJ49F4L0KQP7++H8Wb6Ld9fwVKKrgV+i1UwLQbeVbHJ5G9q5VYZOdfjnRQmzSRN81zdfrZcEG/UmDV+idCnzR7g79FGnuIXxMYz0QipouAItK7Otri0hBSVG2MYsIt2zfuyFJSm7YjIh9msZtmYL3oywHZAfV5dbzcDO80edsElt4zrevJgubSCquCnfLOUeZZayrH9lLrcdsnSvOn29+hTFlFazlU6THk6pbg0hBZeUJ5cFy1bzzZzgVvlzVWE0VgHMy4gMXGtpkxqKpUn0k8lNYBiTVGhb/yRXrgUJAaLowKGs9gRMdt2ds5cBo4RBELs13ZXr383UCn9HvFq8Z7tRGPSeluvbK29YpdjBntEx83vfqmt59/G2Aj2995K58KH/Z/3eFLY5lIOi0akj3dwYabubeQfM='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay14(key){
    (async () => {
        encryptedText = '0xZluVUEmBUFWP7b7H2bHrRweB/xWGQvtQiOByp2Xd+jA7xtSliEYBOAGUSescdYsION9agb/J7I+fnUus1dpDMVOc7qogwfECWE/nbMcrRJ2uvABr8/3Qn/YzY86CyRbq0JSY8Xhq9mUspZV6zDSrU/9eSKnaNfHW9otl+/7TUugFA4MjZgIoklZnQ3IthR7+k5n5rLRbTpVZJwl+9BIb5hQ+H7+8Fuc+9fPMLIWRwH5+VaBR5ASJ3tp8UM4umXpuCpYDwLUPb7XRxZr6wocL8Ec+nqfXYmR9jsXVsZWJ4d4hzx96XVe861yMh84YL9YwTyoj6/0V0VsoX5IwATDeUw/lB3fR2dx5ipwPx1ZAJpKmXuycCO7D2mOu0gxPFdOdvvi5TVC+vNBSTPXqvSOGi9Rh8k/Ev+MYyfzKN17mLGuetM88ni6U3B85Wqvg7lNLMzWKim3a337Mdw1SQDIQ=='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay15(key){
    (async () => {
        encryptedText = 'YCet3sjOcLK+InHPJzjZExIiUXKJ6nx+BDirQkE8pYFLky/mE7Vt3ccHR9cmDHxpmZfKp1BEO25DTo76cDfvU4PKJmbMNqyjdTEwj0FPx904raTxeSzeD3lRHkRJjI924a3eXb6gKvSmvRkQ0jd90p/n0r2BuVYp65cmD1oNjFdKoP4JscXqhc+XOgcQGM+1jw/qlL5WmyPF9FU77e/H+c462/x9c6zQHEYzD2+gHXOsfG3jmmZXSTmNU3JOHwjXhyiMeyK/7N43M5SiAIT13KHirPRWV2OB6AofxHsovmfvbcDmHvnSLgH0FqtqDZpffPpXwZcqW9Aub+DAPjoICqA+dcOgOv1ps0GB0J4MithXk/XY9moCvM4e0W7cs18ridiEeSWKpL64lFQMJojUukiCxK3BqQ107tFyMJPmFFA='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay16(key){
    (async () => {
        encryptedText = 'UZtrODMegWBRlKLY3RK/Rt9jX5J1+5BLENXID2/5E5h5JjzIb4pSdXLmFh3Q3kMUWhzriO+13ETD8E8TXn0/dT7aWScpiQzLt4ySrkRB3oZzo1ndCa/79X5Qzq14CzUIdE019TdpBzaJKgzYA9w2x3qK4HdjHi4oBKbiPnJktoYA1WSSrIAtD6BEqffE6XNkHj71JPm+EBXXA1Y/3QRBHzxQjju6o/jo31qE3f22Qq0JLzYdSWNvgkVduqpCNmfWI7Z4Aa0iB/e5be1S2bk0vzGpemdi0AWU8WyokFh25e+aWSGCxQxdZKDvsaTT3R8SXiIfeXRK+dwWqwa9mrfkKckIAOyMeI82YDsgRHKzP4a974o2QmdHLLea1RC5Eam7TPj1YFlQHa2iYuP4JwbnhIOYt49cw5bCocbqSKEfpKISP3A4UZaRi+AzHRGcgcHD+c1A71FYil9yFdjvnuulkQKdw+upcBGZiZ4KhasNqXfKfTptkhE3nSgwxftug0jNnrijh4bf87c0P0BzaleWxXMrzWV5dBYxNa7dcv3vmFh34tuyDXWgw/Ifku36R5ZdE3CXEecmuLgX3uyOfjxKUB8EbLPtlBFFHUCblGPe2dG+Ny4Y5r4BUvbHtJOxbeHF3xTadsxRl82yGd9qZyjCXU1tSHV7qxRegWDe1qPHJlkVvdWlJdSTanZI0+T/xjrPq1xpmdXD967oaKCIQ6KNqN6GrxtNuk7QH6NvMaOYjZfUp3bqZZCqWZaHgrkuk70DQIVxjshTGSYrmvdh7ExAGfVAUJnDHyviUxxkv7c/09mLaJFdeZrKAjy6CGG/QwmA'  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay17(key){
    (async () => {
        encryptedText = 'w2Ujwdv6yO+T/2JZ1TRaxRTaBGjh8IqF29sPGTpW/k5O06ymuW6Unt3+eExQQ6sAvj4vFP+wMJqBzRKzHqCLZDCTsXHcrZ1o7wiEFnbu8Jhd0ZBdUPFl1sr+cqwsmgkMUEXnshxbSkFm4bK5eob+RSR1uqDfE0yxycnRFTkrzZwboydHhiJT3kgKxBlqjtRaYF6YMl5BotHbOt8kQ4WNSuEIdNYG+zTYVtYc0jL7D+F53tzXCU3zf5y98tVJ+gHG'  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay18(key){
    (async () => {
        encryptedText = 'xi/EFoE5OLHQqB0+UGQLuCDzuIae6eV4d9aLe36u/j3QvFBklQqjOScaa18u/Hjgl4nzq/PIQyWtevEQEUNPiwjmJzIaAqKkgMaRTYfBV5QatIwiuU3JBws9udUESu5AHSfi5H9sAGwv59XpAtO3jSnPA6UDIXCJ+/PR1tvoW4E2w7/DgfY5uqcV1yu46gfsXKEpjoByXpU1UmfoBAdozx3lG5r32P9na3P6OiJBuEbaCVd5KQRPaysmGfxZFrAyyDyje/gHG8YpOPnP3m/qo/V44/mqtmWRPgyCVR0GkDkPGoF1gvYZK7Hgc3P+YikZawlY13p5/gh5A2rpVidN7Pos4RZ0AlfM9Dmbmfwp80I='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay19(key){
    (async () => {
        encryptedText = 'xi/EFoE5OLHQqB0+UGQLuCDzuIae6eV4d9aLe36u/j3QvFBklQqjOScaa18u/Hjgl4nzq/PIQyWtevEQEUNPiwjmJzIaAqKkgMaRTYfBV5QatIwiuU3JBws9udUESu5AHSfi5H9sAGwv59XpAtO3jSnPA6UDIXCJ+/PR1tvoW4E2w7/DgfY5uqcV1yu46gfsXKEpjoByXpU1UmfoBAdozx3lG5r32P9na3P6OiJBuEbaCVd5KQRPaysmGfxZFrAyyDyje/gHG8YpOPnP3m/qo/V44/mqtmWRPgyCVR0GkDkPGoF1gvYZK7Hgc3P+YikZawlY13p5/gh5A2rpVidN7Pos4RZ0AlfM9Dmbmfwp80I='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay20(key){
    (async () => {
        encryptedText = 'xi/EFoE5OLHQqB0+UGQLuCDzuIae6eV4d9aLe36u/j3QvFBklQqjOScaa18u/Hjgl4nzq/PIQyWtevEQEUNPiwjmJzIaAqKkgMaRTYfBV5QatIwiuU3JBws9udUESu5AHSfi5H9sAGwv59XpAtO3jSnPA6UDIXCJ+/PR1tvoW4E2w7/DgfY5uqcV1yu46gfsXKEpjoByXpU1UmfoBAdozx3lG5r32P9na3P6OiJBuEbaCVd5KQRPaysmGfxZFrAyyDyje/gHG8YpOPnP3m/qo/V44/mqtmWRPgyCVR0GkDkPGoF1gvYZK7Hgc3P+YikZawlY13p5/gh5A2rpVidN7Pos4RZ0AlfM9Dmbmfwp80I='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay21(key){
    (async () => {
        encryptedText = 'xi/EFoE5OLHQqB0+UGQLuCDzuIae6eV4d9aLe36u/j3QvFBklQqjOScaa18u/Hjgl4nzq/PIQyWtevEQEUNPiwjmJzIaAqKkgMaRTYfBV5QatIwiuU3JBws9udUESu5AHSfi5H9sAGwv59XpAtO3jSnPA6UDIXCJ+/PR1tvoW4E2w7/DgfY5uqcV1yu46gfsXKEpjoByXpU1UmfoBAdozx3lG5r32P9na3P6OiJBuEbaCVd5KQRPaysmGfxZFrAyyDyje/gHG8YpOPnP3m/qo/V44/mqtmWRPgyCVR0GkDkPGoF1gvYZK7Hgc3P+YikZawlY13p5/gh5A2rpVidN7Pos4RZ0AlfM9Dmbmfwp80I='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay22(key){
    (async () => {
        encryptedText = 'xi/EFoE5OLHQqB0+UGQLuCDzuIae6eV4d9aLe36u/j3QvFBklQqjOScaa18u/Hjgl4nzq/PIQyWtevEQEUNPiwjmJzIaAqKkgMaRTYfBV5QatIwiuU3JBws9udUESu5AHSfi5H9sAGwv59XpAtO3jSnPA6UDIXCJ+/PR1tvoW4E2w7/DgfY5uqcV1yu46gfsXKEpjoByXpU1UmfoBAdozx3lG5r32P9na3P6OiJBuEbaCVd5KQRPaysmGfxZFrAyyDyje/gHG8YpOPnP3m/qo/V44/mqtmWRPgyCVR0GkDkPGoF1gvYZK7Hgc3P+YikZawlY13p5/gh5A2rpVidN7Pos4RZ0AlfM9Dmbmfwp80I='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay23(key){
    (async () => {
        encryptedText = 'xi/EFoE5OLHQqB0+UGQLuCDzuIae6eV4d9aLe36u/j3QvFBklQqjOScaa18u/Hjgl4nzq/PIQyWtevEQEUNPiwjmJzIaAqKkgMaRTYfBV5QatIwiuU3JBws9udUESu5AHSfi5H9sAGwv59XpAtO3jSnPA6UDIXCJ+/PR1tvoW4E2w7/DgfY5uqcV1yu46gfsXKEpjoByXpU1UmfoBAdozx3lG5r32P9na3P6OiJBuEbaCVd5KQRPaysmGfxZFrAyyDyje/gHG8YpOPnP3m/qo/V44/mqtmWRPgyCVR0GkDkPGoF1gvYZK7Hgc3P+YikZawlY13p5/gh5A2rpVidN7Pos4RZ0AlfM9Dmbmfwp80I='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay24(key){
    (async () => {
        encryptedText = 'xi/EFoE5OLHQqB0+UGQLuCDzuIae6eV4d9aLe36u/j3QvFBklQqjOScaa18u/Hjgl4nzq/PIQyWtevEQEUNPiwjmJzIaAqKkgMaRTYfBV5QatIwiuU3JBws9udUESu5AHSfi5H9sAGwv59XpAtO3jSnPA6UDIXCJ+/PR1tvoW4E2w7/DgfY5uqcV1yu46gfsXKEpjoByXpU1UmfoBAdozx3lG5r32P9na3P6OiJBuEbaCVd5KQRPaysmGfxZFrAyyDyje/gHG8YpOPnP3m/qo/V44/mqtmWRPgyCVR0GkDkPGoF1gvYZK7Hgc3P+YikZawlY13p5/gh5A2rpVidN7Pos4RZ0AlfM9Dmbmfwp80I='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay25(key){
    (async () => {
        encryptedText = 'xi/EFoE5OLHQqB0+UGQLuCDzuIae6eV4d9aLe36u/j3QvFBklQqjOScaa18u/Hjgl4nzq/PIQyWtevEQEUNPiwjmJzIaAqKkgMaRTYfBV5QatIwiuU3JBws9udUESu5AHSfi5H9sAGwv59XpAtO3jSnPA6UDIXCJ+/PR1tvoW4E2w7/DgfY5uqcV1yu46gfsXKEpjoByXpU1UmfoBAdozx3lG5r32P9na3P6OiJBuEbaCVd5KQRPaysmGfxZFrAyyDyje/gHG8YpOPnP3m/qo/V44/mqtmWRPgyCVR0GkDkPGoF1gvYZK7Hgc3P+YikZawlY13p5/gh5A2rpVidN7Pos4RZ0AlfM9Dmbmfwp80I='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}
