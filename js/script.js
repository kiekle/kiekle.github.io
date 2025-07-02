// js/script.js
// 当页面加载完成时执行
document.addEventListener('DOMContentLoaded', function() {
    // 设置当前年份
    const yearElement = document.querySelector('.footer-bottom');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2023', currentYear);
    }

    // 导航栏滚动效果
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            header.style.background = 'rgba(44, 62, 80, 0.95)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            header.style.background = 'var(--secondary-color)';
        }
    });

    // 为所有"阅读全文"按钮添加点击事件
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('在实际博客中，这里会跳转到文章详情页');
        });
    });

    // 订阅表单处理
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert(`感谢订阅！我们将向 ${emailInput.value} 发送更新通知`);
                emailInput.value = '';
            }
        });
    }

    // 移动端菜单按钮
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            alert('在实际博客中，这里会展开移动端导航菜单');
        });
    }

    // 初始化控制台消息
    console.log("欢迎访问我的技术博客！");
    console.log("本博客使用GitHub Pages托管");
});