// 1. Init AOS Animation
        AOS.init({
            duration: 800,
            once: true
        });

        // 2. Typing Effect di Hero
        const typed = new Typed('#typed', {
            strings: ['Mahasiswi Teknik Informatika'],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1500,
            loop: true
        });

        // 3. Navbar shadow saat scroll + Active Link
        const navbar = document.querySelector('.navbar-custom');
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section');
        
        window.addEventListener('scroll', () => {
            // Navbar shadow
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }

            // Active nav link
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                if (scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });

            // Back to top button
            const backToTop = document.getElementById('backToTop');
            if (window.scrollY > 300) {
                backToTop.style.display = 'flex';
            } else {
                backToTop.style.display = 'none';
            }
        });

        // 4. Back to Top Click
        document.getElementById('backToTop').addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // 5. Animate Progress Bar saat section Skill keliatan
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bars = entry.target.querySelectorAll('.progress-bar');
                    bars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        bar.style.width = width + '%';
                        bar.textContent = width + '%';
                    });
                }
            });
        }, { threshold: 0.5 });
        
        const skillSection = document.querySelector('#skill');
        if (skillSection) observer.observe(skillSection);

        // 6. Tutup navbar mobile setelah klik link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    bootstrap.Collapse.getInstance(navbarCollapse).hide();
                }
            });
        });