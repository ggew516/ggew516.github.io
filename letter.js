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
        // encryptedText = 'TKieZsaOy82AFG2pvqnN6Q=='
        txt = ''
        key = 0
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
    })();
    return decryptText
}

function decryptDay3(key){
    (async () => {
        console.log(key)
        encryptedText = 'RciHRUdWyLwwDq+B5tN5auex/u6J+J4jqHcbr5D4GMg16/L59kNC5MTlRat1DqoKVE+mmU0+g7uKQ4hqJgID4oJGe8US71MzQEaoBrqjDZDLCwVUZ30PhoaRlFzLw2Ciggp8tlPEFQhYb6QW66snaY/9glsYTtbGTAHjQct5KGC9ZNfNqpxGpVfHZtM6pdqIpnMdXq0M7Y9+zJwEbaYmzUDlsI1V6yuKvtfxxKC97Svp9rLa6kwp0vWFvvwPqrKltKxeEH7RnLFHlolrHI2+4qNKuYkXe4QnbYhDyLCnpmtdcdyD9fMXQV4JeJyudzHsllsq5AK0oXk2ewETXd/hOfAtGWEc64H6fqRltuSojllBS/LYAz/GHS+zr0ksjs1kKv7+ksBaFGzR/9aaK/yXiA=='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
    })();
    return decryptText
}

function decryptDay4(key){
    (async () => {
        encryptedText = 'pHQYntyS6I9cTF9iOERlOmrQyrPTPKh90/BgnMMVgoxoquemWaGDhXZ5HS/9VW5hvzI6B8B4eYgkzOcdBm7x1G4sX3OWuon+QnKemnmvEOspIem2hWMeYiyfwg60cHLtuO1rM5F9YvP88ExaDkPA3izXCVoVGZCB5Cxk5762BfrDV0Xh4Y/JfVJ+ZobIhDmuQ46jq43VrxdCe9xsDkEnxXDvKZCHvl4eH7LJfsUwfTDm3ROuv7U9zt/MYQOOKDZ+H7pSiT61T0oz26Yw9HJGMaNzL/vZk9DIYg9foKbt+QV2iCO5tJ5FKyvDMqpG0QIa0pKOjtcdFur6hyOTQokWE0CLtXO82sQzI8F5IEeuwca3ikN3JJN2MbKnESK3X69D'
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
    })();
    return decryptText
}

function decryptDay5(key){
    (async () => {
        encryptedText = 'xi/EFoE5OLHQqB0+UGQLuCDzuIae6eV4d9aLe36u/j3QvFBklQqjOScaa18u/Hjgl4nzq/PIQyWtevEQEUNPiwjmJzIaAqKkgMaRTYfBV5QatIwiuU3JBws9udUESu5AHSfi5H9sAGwv59XpAtO3jSnPA6UDIXCJ+/PR1tvoW4E2w7/DgfY5uqcV1yu46gfsXKEpjoByXpU1UmfoBAdozx3lG5r32P9na3P6OiJBuEbaCVd5KQRPaysmGfxZFrAyyDyje/gHG8YpOPnP3m/qo/V44/mqtmWRPgyCVR0GkDkPGoF1gvYZK7Hgc3P+YikZawlY13p5/gh5A2rpVidN7Pos4RZ0AlfM9Dmbmfwp80I='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
    })();
    return decryptText
}

