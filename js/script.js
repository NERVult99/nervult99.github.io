
document.addEventListener('DOMContentLoaded', () => {
    const appData = window.APP_DATA;
    if (!appData) {
        console.error("App data not loaded!");
        return;
    }

    // Icon SVGs (simple placeholders or actual SVGs)
    const ICONS = {
        github: '<svg viewBox="0 0 16 16" fill="currentColor" width="1em" height="1em"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>',
        twitter: '<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>',
        linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>',
        instagram: '<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>',
        messageSquare: '<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
        mail: '<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.511l7.406 4.443a.998.998 0 0 0 1.188 0L20 6.51V6H4zm0 10.489V8.269l7.406 4.443a.998.998 0 0 0 1.188 0L20 8.27v8.22H4z"></path></svg>',
        send: '<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>',
        externalLink: '<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>',
        menu: '<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>',
        x: '<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>',
        lightbulb: '<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"></path></svg>',
        handshake: '<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M1 16.44V19h2.55L12 10.56 9.44 8 1 16.44zm19.36-5.8-3.59-3.59a.996.996 0 0 0-1.41 0l-1.06 1.06 3.59 3.59 1.06-1.06c.39-.39.39-1.02 0-1.41zm-2.05-2.05L13.2 13.71l-3.59-3.59L14.88 5c.39-.39 1.02-.39 1.41 0l2.03 2.03c.4.39.4 1.02.04 1.41zM9 17H7v3H5v-3H3v-2h2v-2.34c0-1.03.29-1.99.81-2.78L7.88 8h.71l2.94 2.94L9 13.41V17z"></path></svg>',
        users: '<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>',
        target: '<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></svg>',
        folderKanban: '<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2zM7 17v-7h2v7H7zm4 0v-7h2v7h-2zm4 0v-4h2v4h-2z"></path></svg>',
    };

    function getIcon(name) {
        return ICONS[name] || `<span class="icon-placeholder" title="${name}"></span>`;
    }
    
    // Initialize Site Name
    const logoMain = document.querySelector('.logo-main');
    const logoLast = document.querySelector('.logo-last');
    if(logoMain && logoLast && appData.SITE_NAME) {
        const nameParts = appData.SITE_NAME.split(' ');
        const mainName = nameParts.slice(0, -1).join(' ');
        const lastName = nameParts.slice(-1)[0];
        logoMain.textContent = mainName;
        logoLast.textContent = lastName + (nameParts.length > 1 ? '' : ' '); // ensure space if only one word
    }


    // Header Navigation
    const mainNavUl = document.querySelector('.main-nav ul');
    const mobileNavUl = document.querySelector('.mobile-nav-links ul');
    const currentPath = window.location.pathname.split('/').pop();

    appData.NAV_ITEMS.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.label;
        if (currentPath === item.href || (currentPath === '' && item.href === 'index.html')) {
            a.classList.add('active');
        }
        li.appendChild(a);

        if (mainNavUl) mainNavUl.appendChild(li.cloneNode(true));
        if (mobileNavUl) mobileNavUl.appendChild(li);
    });

    // Header Social Links
    const headerSocialContainer = document.querySelector('.header-social-links');
    if (headerSocialContainer) {
        appData.SOCIAL_LINKS.slice(0, 3).forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.setAttribute('aria-label', link.name);
            a.innerHTML = getIcon(link.iconName);
            headerSocialContainer.appendChild(a);
        });
    }

    // Mobile Navigation Toggle
    const mobileNavTrigger = document.querySelector('.mobile-nav-trigger');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    const mobileNavPanel = document.querySelector('.mobile-nav-panel');

    if (mobileNavTrigger && mobileNavPanel) {
        mobileNavTrigger.addEventListener('click', () => {
            mobileNavPanel.classList.add('open');
        });
    }
    if (mobileNavClose && mobileNavPanel) {
        mobileNavClose.addEventListener('click', () => {
            mobileNavPanel.classList.remove('open');
        });
    }
    // Close mobile nav when a link is clicked
    if (mobileNavPanel) {
        mobileNavPanel.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNavPanel.classList.remove('open');
            });
        });
    }


    // Footer
    const footerCopyright = document.querySelector('.footer-copyright');
    if (footerCopyright) {
        footerCopyright.innerHTML = `&copy; ${new Date().getFullYear()} ${appData.SITE_NAME}. All rights reserved.`;
    }
    const footerSocialContainer = document.querySelector('.footer-social-links');
    if (footerSocialContainer) {
        appData.SOCIAL_LINKS.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.setAttribute('aria-label', link.name);
            a.innerHTML = getIcon(link.iconName);
            footerSocialContainer.appendChild(a);
        });
    }
    const mobileNavFooterCopyright = document.querySelector('.mobile-nav-copyright');
     if (mobileNavFooterCopyright) {
        mobileNavFooterCopyright.innerHTML = `&copy; ${new Date().getFullYear()} ${appData.SITE_NAME}. All rights reserved.`;
    }
    const mobileNavSocialContainer = document.querySelector('.mobile-nav-social-links');
    if (mobileNavSocialContainer) {
        appData.SOCIAL_LINKS.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.setAttribute('aria-label', link.name);
            a.innerHTML = getIcon(link.iconName);
            mobileNavSocialContainer.appendChild(a);
        });
    }


    // Function to render project cards
    function renderProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'card project-card';

        let imageHtml = '';
        if (project.imageUrl) {
            imageHtml = `
                <div class="project-card-image-container">
                    <img src="${project.imageUrl}" alt="${project.title}" loading="lazy" data-ai-hint="${project.dataAiHint || project.category.toLowerCase() + ' project'}">
                </div>`;
        } else if (project.iconName) { // Assuming project might have an iconName like social links
            imageHtml = `
                <div class="project-card-image-container">
                    <div class="project-icon-placeholder">${getIcon(project.iconName)}</div>
                </div>`;
        }


        let tagsHtml = '';
        if (project.tags && project.tags.length > 0) {
            tagsHtml = `<div class="project-card-tags">
                ${project.tags.map(tag => `<span class="badge">${tag}</span>`).join('')}
            </div>`;
        }

        let footerHtml = '<div class="card-footer">';
        if (project.repoLink) {
            footerHtml += `
                <a href="${project.repoLink}" target="_blank" rel="noopener noreferrer" class="button button-sm button-outline icon-button">
                    ${getIcon('github')} GitHub
                </a>`;
        }
        if (project.liveLink) {
            footerHtml += `
                <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="button button-sm button-accent icon-button">
                    ${getIcon('externalLink')} Live Demo
                </a>`;
        }
        footerHtml += '</div>';

        card.innerHTML = `
            ${imageHtml}
            <div class="card-header">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.25rem;">
                    <h3 class="card-title">${project.title}</h3>
                    ${project.category ? `<span class="badge" style="font-size: 0.75rem; padding: 0.2rem 0.5rem; background-color: hsl(var(--secondary-color)); border-radius: 0.25rem;">${project.category}</span>` : ''}
                </div>
                <p class="card-description">${project.description}</p>
            </div>
            <div class="card-content">
                ${tagsHtml}
            </div>
            ${(project.repoLink || project.liveLink) ? footerHtml : ''}
        `;
        return card;
    }

    // Render Featured Projects on Home Page
    const featuredProjectsContainer = document.getElementById('featured-projects-grid');
    if (featuredProjectsContainer) {
        const featuredProjects = appData.PROJECTS_DATA.slice(0, 3);
        featuredProjects.forEach(project => {
            featuredProjectsContainer.appendChild(renderProjectCard(project));
        });
        const viewAllProjectsButtonContainer = document.getElementById('view-all-projects-button-container');
        if (appData.PROJECTS_DATA.length > 3 && viewAllProjectsButtonContainer) {
             viewAllProjectsButtonContainer.style.display = 'block';   
        } else if (viewAllProjectsButtonContainer) {
            viewAllProjectsButtonContainer.style.display = 'none';
        }
    }

    // Render All Projects on Projects Page
    const allProjectsContainer = document.getElementById('all-projects-grid');
    if (allProjectsContainer) {
        if (appData.PROJECTS_DATA.length > 0) {
            appData.PROJECTS_DATA.forEach(project => {
                allProjectsContainer.appendChild(renderProjectCard(project));
            });
        } else {
            const message = document.createElement('p');
            message.className = 'text-xl text-muted-foreground';
            message.textContent = 'We are currently curating our project showcase. Check back soon for exciting updates!';
            allProjectsContainer.parentNode.appendChild(message); // Assuming parent is the section
        }
    }

    // About Page - Core Values
    const coreValuesContainer = document.getElementById('core-values-grid');
    if (coreValuesContainer && appData.CORE_VALUES) {
        appData.CORE_VALUES.forEach(value => {
            const card = document.createElement('div');
            card.className = 'card value-card';
            card.innerHTML = `
                <div class="card-header">
                    <div class="value-icon-wrapper">${getIcon(value.iconName)}</div>
                    <h3 class="card-title" style="font-size: 1.25rem;">${value.title}</h3>
                </div>
                <div class="card-content">
                    <p class="text-muted-foreground">${value.description}</p>
                </div>
            `;
            coreValuesContainer.appendChild(card);
        });
    }
    
    // About Page - Team Members
    const teamMembersContainer = document.getElementById('team-members-grid');
    if (teamMembersContainer && appData.TEAM_MEMBERS) {
        appData.TEAM_MEMBERS.forEach(member => {
            const card = document.createElement('div');
            card.className = 'card team-member-card';
            
            let avatarFallback = member.name.substring(0,2).toUpperCase();

            card.innerHTML = `
                <div class="avatar">
                    <img src="${member.avatar}" alt="${member.name}" data-ai-hint="${member.dataAiHint}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" loading="lazy"/>
                    <div class="avatar-fallback" style="display:none;">${avatarFallback}</div>
                </div>
                <h3 class="text-xl font-semibold" style="color: hsl(var(--foreground));">${member.name}</h3>
                <p class="text-accent">${member.role}</p>
            `;
             // Fallback for image load error
            const img = card.querySelector('img');
            img.onerror = () => {
                img.style.display = 'none';
                card.querySelector('.avatar-fallback').style.display = 'flex';
            };
            teamMembersContainer.appendChild(card);
        });
    }


    // Contact Page
    const contactForm = document.getElementById('contact-form');
    const formMessageContainer = document.getElementById('form-message');

    if (contactForm && formMessageContainer) {
        // Set contact email link
        const emailLink = document.getElementById('contact-email-link');
        if (emailLink) {
            emailLink.href = `mailto:${appData.CONTACT_EMAIL}`;
            emailLink.textContent = appData.CONTACT_EMAIL;
        }


        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            formMessageContainer.innerHTML = ''; // Clear previous messages

            const formData = new FormData(contactForm);
            const name = formData.get('name').trim();
            const email = formData.get('email').trim();
            const message = formData.get('message').trim();
            let issues = [];

            if (name.length < 2) {
                issues.push("Name must be at least 2 characters.");
            }
            if (!/^\S+@\S+\.\S+$/.test(email)) {
                issues.push("Invalid email address.");
            }
            if (message.length < 10) {
                issues.push("Message must be at least 10 characters.");
            }

            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.innerHTML = `<span class="loader"></span> Sending...`;


            if (issues.length > 0) {
                formMessageContainer.className = 'form-message error';
                let issueList = '<ul>';
                issues.forEach(issue => issueList += `<li>${issue}</li>`);
                issueList += '</ul>';
                formMessageContainer.innerHTML = `<strong>Invalid form data:</strong> ${issueList}`;
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
                return;
            }
            
            // Simulate form submission (e.g., log to console)
            // In a real static site, you might use a service like Formspree or Netlify Forms,
            // or a mailto: link, though mailto has limitations.
            setTimeout(() => { // Simulate network delay
                console.log("Contact Form Submitted:");
                console.log("Name:", name);
                console.log("Email:", email);
                console.log("Message:", message);

                formMessageContainer.className = 'form-message success';
                formMessageContainer.textContent = "Thank you for your message! We'll get back to you soon (this is a demo, data logged to console).";
                contactForm.reset();
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            }, 1000);

        });
    }


});