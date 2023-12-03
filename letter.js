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

function enc(){
    (async () => {
        txt = '안녕 예지야.\n\n사실 그 셔츠의 재질은 텔셸 70%, 린넨 30% 지만 알게 뭐람!?\n\n오늘로 벌써 10번째 이야기야.\n\n재미있게 보고 있으려나??\n\n매일매일 궁금해하고 있겠지??\n\n그런데 10번이나 어드벤트 캘린더에서\n\n비슷한 물건이 나오면 조금 재미없을 수도 있을 것 같아.\n\n그래서 내일부터는 조금 다른게 나올꺼야!\n\n히히\n\n사랑해 예지야.\n\n\n'
        key = 1518968151896815
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
        encryptedText = 'xi/EFoE5OLHQqB0+UGQLuCDzuIae6eV4d9aLe36u/j3QvFBklQqjOScaa18u/Hjgl4nzq/PIQyWtevEQEUNPiwjmJzIaAqKkgMaRTYfBV5QatIwiuU3JBws9udUESu5AHSfi5H9sAGwv59XpAtO3jSnPA6UDIXCJ+/PR1tvoW4E2w7/DgfY5uqcV1yu46gfsXKEpjoByXpU1UmfoBAdozx3lG5r32P9na3P6OiJBuEbaCVd5KQRPaysmGfxZFrAyyDyje/gHG8YpOPnP3m/qo/V44/mqtmWRPgyCVR0GkDkPGoF1gvYZK7Hgc3P+YikZawlY13p5/gh5A2rpVidN7Pos4RZ0AlfM9Dmbmfwp80I='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay12(key){
    (async () => {
        encryptedText = 'xi/EFoE5OLHQqB0+UGQLuCDzuIae6eV4d9aLe36u/j3QvFBklQqjOScaa18u/Hjgl4nzq/PIQyWtevEQEUNPiwjmJzIaAqKkgMaRTYfBV5QatIwiuU3JBws9udUESu5AHSfi5H9sAGwv59XpAtO3jSnPA6UDIXCJ+/PR1tvoW4E2w7/DgfY5uqcV1yu46gfsXKEpjoByXpU1UmfoBAdozx3lG5r32P9na3P6OiJBuEbaCVd5KQRPaysmGfxZFrAyyDyje/gHG8YpOPnP3m/qo/V44/mqtmWRPgyCVR0GkDkPGoF1gvYZK7Hgc3P+YikZawlY13p5/gh5A2rpVidN7Pos4RZ0AlfM9Dmbmfwp80I='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay13(key){
    (async () => {
        encryptedText = 'xi/EFoE5OLHQqB0+UGQLuCDzuIae6eV4d9aLe36u/j3QvFBklQqjOScaa18u/Hjgl4nzq/PIQyWtevEQEUNPiwjmJzIaAqKkgMaRTYfBV5QatIwiuU3JBws9udUESu5AHSfi5H9sAGwv59XpAtO3jSnPA6UDIXCJ+/PR1tvoW4E2w7/DgfY5uqcV1yu46gfsXKEpjoByXpU1UmfoBAdozx3lG5r32P9na3P6OiJBuEbaCVd5KQRPaysmGfxZFrAyyDyje/gHG8YpOPnP3m/qo/V44/mqtmWRPgyCVR0GkDkPGoF1gvYZK7Hgc3P+YikZawlY13p5/gh5A2rpVidN7Pos4RZ0AlfM9Dmbmfwp80I='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay14(key){
    (async () => {
        encryptedText = 'xi/EFoE5OLHQqB0+UGQLuCDzuIae6eV4d9aLe36u/j3QvFBklQqjOScaa18u/Hjgl4nzq/PIQyWtevEQEUNPiwjmJzIaAqKkgMaRTYfBV5QatIwiuU3JBws9udUESu5AHSfi5H9sAGwv59XpAtO3jSnPA6UDIXCJ+/PR1tvoW4E2w7/DgfY5uqcV1yu46gfsXKEpjoByXpU1UmfoBAdozx3lG5r32P9na3P6OiJBuEbaCVd5KQRPaysmGfxZFrAyyDyje/gHG8YpOPnP3m/qo/V44/mqtmWRPgyCVR0GkDkPGoF1gvYZK7Hgc3P+YikZawlY13p5/gh5A2rpVidN7Pos4RZ0AlfM9Dmbmfwp80I='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay15(key){
    (async () => {
        encryptedText = 'xi/EFoE5OLHQqB0+UGQLuCDzuIae6eV4d9aLe36u/j3QvFBklQqjOScaa18u/Hjgl4nzq/PIQyWtevEQEUNPiwjmJzIaAqKkgMaRTYfBV5QatIwiuU3JBws9udUESu5AHSfi5H9sAGwv59XpAtO3jSnPA6UDIXCJ+/PR1tvoW4E2w7/DgfY5uqcV1yu46gfsXKEpjoByXpU1UmfoBAdozx3lG5r32P9na3P6OiJBuEbaCVd5KQRPaysmGfxZFrAyyDyje/gHG8YpOPnP3m/qo/V44/mqtmWRPgyCVR0GkDkPGoF1gvYZK7Hgc3P+YikZawlY13p5/gh5A2rpVidN7Pos4RZ0AlfM9Dmbmfwp80I='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay16(key){
    (async () => {
        encryptedText = 'xi/EFoE5OLHQqB0+UGQLuCDzuIae6eV4d9aLe36u/j3QvFBklQqjOScaa18u/Hjgl4nzq/PIQyWtevEQEUNPiwjmJzIaAqKkgMaRTYfBV5QatIwiuU3JBws9udUESu5AHSfi5H9sAGwv59XpAtO3jSnPA6UDIXCJ+/PR1tvoW4E2w7/DgfY5uqcV1yu46gfsXKEpjoByXpU1UmfoBAdozx3lG5r32P9na3P6OiJBuEbaCVd5KQRPaysmGfxZFrAyyDyje/gHG8YpOPnP3m/qo/V44/mqtmWRPgyCVR0GkDkPGoF1gvYZK7Hgc3P+YikZawlY13p5/gh5A2rpVidN7Pos4RZ0AlfM9Dmbmfwp80I='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
        go_msg(decryptedText)
    })();
}

function decryptDay17(key){
    (async () => {
        encryptedText = 'xi/EFoE5OLHQqB0+UGQLuCDzuIae6eV4d9aLe36u/j3QvFBklQqjOScaa18u/Hjgl4nzq/PIQyWtevEQEUNPiwjmJzIaAqKkgMaRTYfBV5QatIwiuU3JBws9udUESu5AHSfi5H9sAGwv59XpAtO3jSnPA6UDIXCJ+/PR1tvoW4E2w7/DgfY5uqcV1yu46gfsXKEpjoByXpU1UmfoBAdozx3lG5r32P9na3P6OiJBuEbaCVd5KQRPaysmGfxZFrAyyDyje/gHG8YpOPnP3m/qo/V44/mqtmWRPgyCVR0GkDkPGoF1gvYZK7Hgc3P+YikZawlY13p5/gh5A2rpVidN7Pos4RZ0AlfM9Dmbmfwp80I='  
    
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
