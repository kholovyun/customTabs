const container = document.createElement('div');
container.className = 'container';
document.body.append(container);
let tabs = document.createElement('div');
tabs.className = 'tabs';
container.append(tabs);
let indicatorLine = document.createElement('div')
indicatorLine.className = 'indicate__line'
container.append(indicatorLine)
const content = document.createElement('div')
content.className = 'content'
container.append(content)

const createTabContent = (title, text) => {
    const tabsDiv = document.createElement('div')
    tabs.append(tabsDiv)
    const tabsItem = document.createElement('div')
    tabsItem.className = 'item'
    tabsDiv.append(tabsItem)
    const flag = document.createElement('i')
    flag.className = 'fa-solid'
    flag.classList.add('fa-flag')
    tabsItem.append(flag)
    const contentDiv = document.createElement('div')
    contentDiv.className = 'div'
    content.append(contentDiv)
    const contentItem = document.createElement('div')
    contentItem.className = 'content-item'
    contentDiv.append(contentItem)
    const contentTitle = document.createElement('h2')
    contentItem.appendChild(contentTitle)
    contentTitle.innerText = title
    const contentText = document.createElement('p')
    contentItem.append(contentText)
    contentText.innerText = text
    const allTabs = document.querySelectorAll('.item')
    content.children[0].classList.add('active')
    tabs.children[0].classList.add('active')
    for(let i = 0; i < allTabs.length; i++){
        tabsItem.innerText = 'Tab' + ' ' + (i + 1)
        if(i === 0){
            allTabs[0].classList.add('active')  
        }
    }
    tabsDiv.addEventListener('click', () => {
        for(let i = 0; i < tabs.childElementCount; i++){
            tabs.children[i].classList.remove('active');
            content.children[i].classList.remove('active')
            
        }
        tabsDiv.classList.add('active')
        contentDiv.classList.add('active')
    })
}

createTabContent('YUnus', 'adadada adad amakfma a kdal;ka l; a l;amf ;alm f;kaf ;maf l;m')
createTabContent('Arman', 'adadada adad amakfma a kdal;ka l; a l;amf ;alm f;kaf ;maf l;m')
createTabContent('Nurzhan', 'adadada adad amakfma a kdal;ka l; a l;amf ;alm f;kaf ;maf l;m')
createTabContent('YUnus', 'adadada adad amakfma a kdal;ka l; a l;amf ;alm f;kaf ;maf l;m')
createTabContent('Arman', 'adadada adad amakfma a kdal;ka l; a l;amf ;alm f;kaf ;maf l;m')
createTabContent('Nurzhan', 'adadada adad amakfma a kdal;ka l; a l;amf ;alm f;kaf ;maf l;m')
createTabContent('YUnus', 'adadada adad amakfma a kdal;ka l; a l;amf ;alm f;kaf ;maf l;m')
createTabContent('Arman', 'adadada adad amakfma a kdal;ka l; a l;amf ;alm f;kaf ;maf l;m')
createTabContent('Nurzhan', 'adadada adad amakfma a kdal;ka l; a l;amf ;alm f;kaf ;maf l;m')

          