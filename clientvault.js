// ClientVault – Storage & Cookie Inspector
// Created by URDev • https://github.com/urdev4ever • https://urdev.carrd.co/
(function() {
    if (window.__CLIENTVAULT_INSPECTOR) {
        console.log('ClientVault is already running!');
        return;
    }
    
    window.__CLIENTVAULT_INSPECTOR = true;
    
    const draculaTheme = {
        background: '#282a36',
        currentLine: '#44475a',
        foreground: '#f8f8f2',
        comment: '#6272a4',
        cyan: '#8be9fd',
        green: '#50fa7b',
        orange: '#ffb86c',
        pink: '#ff79c6',
        purple: '#bd93f9',
        red: '#ff5555',
        yellow: '#f1fa8c'
    };
    
    const inspector = document.createElement('div');
    inspector.id = 'clientvault-inspector';
    inspector.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 900px;
        height: 650px;
        background: ${draculaTheme.background};
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        z-index: 999999;
        font-family: 'Segoe UI', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
        display: flex;
        flex-direction: column;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;
        border: 1px solid ${draculaTheme.currentLine};
        color: ${draculaTheme.foreground};
    `;
    
    const minimizedBtn = document.createElement('div');
    minimizedBtn.id = 'clientvault-minimized';
    minimizedBtn.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: ${draculaTheme.purple};
        border-radius: 50%;
        box-shadow: 0 8px 25px rgba(189, 147, 249, 0.3);
        z-index: 999999;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        color: ${draculaTheme.background};
        font-size: 24px;
        font-weight: bold;
        user-select: none;
        border: 2px solid ${draculaTheme.cyan};
        transition: all 0.3s ease;
    `;
    minimizedBtn.textContent = '🔐';
    minimizedBtn.title = 'Open ClientVault';
    
    minimizedBtn.addEventListener('mouseenter', () => {
        minimizedBtn.style.transform = 'scale(1.1)';
        minimizedBtn.style.boxShadow = '0 12px 30px rgba(189, 147, 249, 0.4)';
    });
    
    minimizedBtn.addEventListener('mouseleave', () => {
        minimizedBtn.style.transform = 'scale(1)';
        minimizedBtn.style.boxShadow = '0 8px 25px rgba(189, 147, 249, 0.3)';
    });
    
    const header = document.createElement('div');
    header.style.cssText = `
        background: linear-gradient(135deg, ${draculaTheme.purple}, ${draculaTheme.pink});
        color: ${draculaTheme.background};
        padding: 18px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 12px 12px 0 0;
        user-select: none;
        border-bottom: 2px solid ${draculaTheme.currentLine};
    `;
    
    const title = document.createElement('h3');
    title.innerHTML = '🔐 <span style="color: #50fa7b">ClientVault</span> – Storage & Cookie Inspector';
    title.style.cssText = 'margin: 0; font-size: 20px; font-weight: 600; letter-spacing: 0.5px;';
    
    const controls = document.createElement('div');
    controls.style.cssText = 'display: flex; gap: 12px; align-items: center;';
    
    const minimizeBtn = document.createElement('button');
    minimizeBtn.innerHTML = '−';
    minimizeBtn.title = 'Minimize';
    minimizeBtn.style.cssText = `
        background: rgba(40, 42, 54, 0.3);
        border: 2px solid rgba(248, 248, 242, 0.3);
        color: ${draculaTheme.foreground};
        width: 34px;
        height: 34px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        font-weight: bold;
    `;
    
    minimizeBtn.addEventListener('mouseenter', () => {
        minimizeBtn.style.background = draculaTheme.cyan;
        minimizeBtn.style.color = draculaTheme.background;
        minimizeBtn.style.borderColor = draculaTheme.cyan;
    });
    
    minimizeBtn.addEventListener('mouseleave', () => {
        minimizeBtn.style.background = 'rgba(40, 42, 54, 0.3)';
        minimizeBtn.style.color = draculaTheme.foreground;
        minimizeBtn.style.borderColor = 'rgba(248, 248, 242, 0.3)';
    });
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.title = 'Close';
    closeBtn.style.cssText = `
        background: rgba(40, 42, 54, 0.3);
        border: 2px solid rgba(248, 248, 242, 0.3);
        color: ${draculaTheme.foreground};
        width: 34px;
        height: 34px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        font-weight: bold;
    `;
    
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.background = draculaTheme.red;
        closeBtn.style.color = draculaTheme.background;
        closeBtn.style.borderColor = draculaTheme.red;
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.background = 'rgba(40, 42, 54, 0.3)';
        closeBtn.style.color = draculaTheme.foreground;
        closeBtn.style.borderColor = 'rgba(248, 248, 242, 0.3)';
    });
    
    const clearAllBtn = document.createElement('button');
    clearAllBtn.innerHTML = '🗑️ Clear All';
    clearAllBtn.title = 'Clear all storage and cookies (irreversible)';
    clearAllBtn.style.cssText = `
        background: ${draculaTheme.red};
        border: 2px solid ${draculaTheme.red};
        color: ${draculaTheme.background};
        padding: 10px 18px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.5px;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        gap: 8px;
    `;
    
    clearAllBtn.addEventListener('mouseenter', () => {
        clearAllBtn.style.background = draculaTheme.background;
        clearAllBtn.style.color = draculaTheme.red;
        clearAllBtn.style.transform = 'translateY(-2px)';
        clearAllBtn.style.boxShadow = '0 6px 20px rgba(255, 85, 85, 0.4)';
    });
    
    clearAllBtn.addEventListener('mouseleave', () => {
        clearAllBtn.style.background = draculaTheme.red;
        clearAllBtn.style.color = draculaTheme.background;
        clearAllBtn.style.transform = 'translateY(0)';
        clearAllBtn.style.boxShadow = 'none';
    });
    
    controls.appendChild(clearAllBtn);
    controls.appendChild(minimizeBtn);
    controls.appendChild(closeBtn);
    
    header.appendChild(title);
    header.appendChild(controls);
    
    const content = document.createElement('div');
    content.style.cssText = `
        display: flex;
        flex: 1;
        overflow: hidden;
    `;
    
    const sidebar = document.createElement('div');
    sidebar.style.cssText = `
        width: 220px;
        background: ${draculaTheme.currentLine};
        padding: 20px 0;
        border-right: 2px solid ${draculaTheme.comment};
        overflow-y: auto;
    `;
    
    const sidebarTitle = document.createElement('div');
    sidebarTitle.textContent = 'VAULT SECTIONS';
    sidebarTitle.style.cssText = `
        padding: 15px 24px;
        font-weight: 700;
        color: ${draculaTheme.cyan};
        border-bottom: 1px solid ${draculaTheme.comment};
        margin-bottom: 15px;
        letter-spacing: 1px;
        font-size: 12px;
        text-transform: uppercase;
    `;
    
    const storageTypes = [
        { id: 'local', name: 'Local Vault', icon: '📦', color: draculaTheme.green },
        { id: 'session', name: 'Session Vault', icon: '💾', color: draculaTheme.cyan },
        { id: 'cookies', name: 'Cookie Jar', icon: '🍪', color: draculaTheme.orange }
    ];
    
    const typeButtons = storageTypes.map(type => {
        const btn = document.createElement('div');
        btn.dataset.type = type.id;
        btn.innerHTML = `<span style="font-size: 18px; margin-right: 12px;">${type.icon}</span> ${type.name}`;
        btn.style.cssText = `
            padding: 16px 24px;
            cursor: pointer;
            border-left: 4px solid transparent;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            font-weight: 500;
            margin: 5px 0;
        `;
        
        btn.addEventListener('mouseenter', () => {
            if (!btn.classList.contains('active')) {
                btn.style.background = 'rgba(98, 114, 164, 0.3)';
                btn.style.borderLeftColor = type.color;
            }
        });
        
        btn.addEventListener('mouseleave', () => {
            if (!btn.classList.contains('active')) {
                btn.style.background = 'transparent';
                btn.style.borderLeftColor = 'transparent';
            }
        });
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('#clientvault-inspector .vault-section-btn').forEach(b => {
                b.classList.remove('active');
                b.style.background = 'transparent';
                b.style.borderLeftColor = 'transparent';
                b.style.color = draculaTheme.foreground;
            });
            
            btn.classList.add('active');
            btn.style.background = 'rgba(98, 114, 164, 0.5)';
            btn.style.borderLeftColor = type.color;
            btn.style.color = type.color;
            
            loadStorageData(type.id);
        });
        
        btn.classList.add('vault-section-btn');
        return btn;
    });
    
    if (typeButtons[0]) {
        typeButtons[0].classList.add('active');
        typeButtons[0].style.background = 'rgba(98, 114, 164, 0.5)';
        typeButtons[0].style.borderLeftColor = storageTypes[0].color;
        typeButtons[0].style.color = storageTypes[0].color;
    }
    
    sidebar.appendChild(sidebarTitle);
    typeButtons.forEach(btn => sidebar.appendChild(btn));
    
    const mainContent = document.createElement('div');
    mainContent.style.cssText = `
        flex: 1;
        padding: 0;
        overflow: hidden;
        background: ${draculaTheme.background};
        position: relative;
    `;
    
    const tableContainer = document.createElement('div');
    tableContainer.style.cssText = `
        width: 100%;
        height: 100%;
        overflow-y: auto;
        padding: 20px;
    `;
    
    const dataTable = document.createElement('div');
    dataTable.id = 'clientvault-data-table';
    dataTable.style.cssText = 'width: 100%;';
    
    const statsBar = document.createElement('div');
    statsBar.id = 'clientvault-stats-bar';
    statsBar.style.cssText = `
        padding: 12px 20px;
        background: ${draculaTheme.currentLine};
        border-bottom: 1px solid ${draculaTheme.comment};
        display: flex;
        gap: 20px;
        font-size: 13px;
        color: ${draculaTheme.comment};
    `;
    
    mainContent.appendChild(statsBar);
    tableContainer.appendChild(dataTable);
    mainContent.appendChild(tableContainer);
    
    const detailViewer = document.createElement('div');
    detailViewer.id = 'clientvault-detail-viewer';
    detailViewer.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        width: 800px;
        max-height: 85vh;
        background: ${draculaTheme.background};
        border-radius: 16px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
        z-index: 1000000;
        padding: 0;
        transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        overflow: hidden;
        border: 2px solid ${draculaTheme.purple};
        color: ${draculaTheme.foreground};
    `;
    
    const detailHeader = document.createElement('div');
    detailHeader.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 30px;
        background: linear-gradient(135deg, ${draculaTheme.purple}, ${draculaTheme.pink});
        color: ${draculaTheme.background};
        border-bottom: 2px solid ${draculaTheme.currentLine};
    `;
    
    const detailTitle = document.createElement('h3');
    detailTitle.id = 'detail-title';
    detailTitle.textContent = 'Vault Item Details';
    detailTitle.style.cssText = 'margin: 0; font-size: 18px; font-weight: 600;';
    
    const closeDetailBtn = document.createElement('button');
    closeDetailBtn.innerHTML = '×';
    closeDetailBtn.style.cssText = `
        background: rgba(40, 42, 54, 0.3);
        border: 2px solid rgba(248, 248, 242, 0.3);
        color: ${draculaTheme.foreground};
        width: 36px;
        height: 36px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        font-weight: bold;
    `;
    
    closeDetailBtn.addEventListener('mouseenter', () => {
        closeDetailBtn.style.background = draculaTheme.red;
        closeDetailBtn.style.color = draculaTheme.background;
        closeDetailBtn.style.borderColor = draculaTheme.red;
    });
    
    closeDetailBtn.addEventListener('mouseleave', () => {
        closeDetailBtn.style.background = 'rgba(40, 42, 54, 0.3)';
        closeDetailBtn.style.color = draculaTheme.foreground;
        closeDetailBtn.style.borderColor = 'rgba(248, 248, 242, 0.3)';
    });
    
    const detailContent = document.createElement('div');
    detailContent.id = 'detail-content';
    detailContent.style.cssText = `
        font-family: 'Cascadia Code', 'Fira Code', 'Monaco', 'Menlo', monospace;
        font-size: 14px;
        line-height: 1.6;
        word-break: break-all;
        white-space: pre-wrap;
        background: ${draculaTheme.currentLine};
        padding: 25px;
        border-radius: 0;
        max-height: calc(85vh - 120px);
        overflow-y: auto;
        color: ${draculaTheme.foreground};
    `;
    
    detailHeader.appendChild(detailTitle);
    detailHeader.appendChild(closeDetailBtn);
    detailViewer.appendChild(detailHeader);
    detailViewer.appendChild(detailContent);
    
    const overlay = document.createElement('div');
    overlay.id = 'clientvault-detail-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 999999;
        display: none;
        backdrop-filter: blur(4px);
    `;
    
    content.appendChild(sidebar);
    content.appendChild(mainContent);
    inspector.appendChild(header);
    inspector.appendChild(content);
    
    document.body.appendChild(inspector);
    document.body.appendChild(minimizedBtn);
    document.body.appendChild(overlay);
    document.body.appendChild(detailViewer);
    
    function getAllCookies() {
        const cookies = [];
        const standardCookies = document.cookie.split(';')
            .map(c => c.trim())
            .filter(c => c.length > 0)
            .map(cookie => {
                const [key, ...valueParts] = cookie.split('=');
                const value = valueParts.join('=');
                return { key: decodeURIComponent(key), value: decodeURIComponent(value) };
            });
        
        cookies.push(...standardCookies);
        return cookies;
    }
    
    loadStorageData('local');
    
    function loadStorageData(type) {
        let data = [];
        let totalSize = 0;
        let itemCount = 0;
        
        if (type === 'local') {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
                const size = value ? new Blob([value]).size : 0;
                totalSize += size;
                itemCount++;
                data.push({ key: key, value: value, type: 'local', size: size });
            }
        } else if (type === 'session') {
            for (let i = 0; i < sessionStorage.length; i++) {
                const key = sessionStorage.key(i);
                const value = sessionStorage.getItem(key);
                const size = value ? new Blob([value]).size : 0;
                totalSize += size;
                itemCount++;
                data.push({ key: key, value: value, type: 'session', size: size });
            }
        } else if (type === 'cookies') {
            const cookies = getAllCookies();
            cookies.forEach(cookie => {
                const size = cookie.value ? new Blob([cookie.value]).size : 0;
                totalSize += size;
                itemCount++;
                data.push({ key: cookie.key, value: cookie.value, type: 'cookie', size: size });
            });
        }
        
        updateStatsBar(type, itemCount, totalSize);
        renderDataTable(data, type);
    }
    
    function updateStatsBar(type, count, totalSize) {
        const typeName = type === 'local' ? 'Local Vault' : 
                        type === 'session' ? 'Session Vault' : 'Cookie Jar';
        const sizeKB = (totalSize / 1024).toFixed(2);
        
        statsBar.innerHTML = `
            <div style="color: ${draculaTheme.green}">
                <strong>Vault:</strong> ${typeName}
            </div>
            <div style="color: ${draculaTheme.cyan}">
                <strong>Items:</strong> ${count}
            </div>
            <div style="color: ${draculaTheme.orange}">
                <strong>Size:</strong> ${sizeKB} KB
            </div>
            <div style="color: ${draculaTheme.pink}; margin-left: auto;">
                <strong>Domain:</strong> ${window.location.hostname}
            </div>
        `;
    }
    
    function renderDataTable(data, type) {
        dataTable.innerHTML = '';
        
        if (data.length === 0) {
            const emptyMsg = document.createElement('div');
            emptyMsg.style.cssText = `
                text-align: center; 
                padding: 80px 20px 20px; 
                color: ${draculaTheme.comment};
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 300px;
            `;
            
            const icon = type === 'local' ? '📦' : type === 'session' ? '💾' : '🍪';
            const message = type === 'cookies' && getAllCookies().length === 0 ? 
                'No accessible cookies found. Cookies might be HttpOnly or set for different paths.' :
                `No ${type === 'cookies' ? 'cookies' : 'data'} found in this vault`;
            
            emptyMsg.innerHTML = `
                <div style="font-size: 64px; margin-bottom: 30px; opacity: 0.5;">${icon}</div>
                <h3 style="color: ${draculaTheme.foreground}; margin: 0 0 15px 0;">${message}</h3>
                <p style="max-width: 400px; line-height: 1.5; margin-bottom: 30px;">This site hasn't stored any ${type === 'cookies' ? 'cookies' : 'data'} that are accessible via JavaScript.</p>
            `;
            
            if (type === 'cookies') {
                const troubleshoot = document.createElement('div');
                troubleshoot.style.cssText = `
                    margin-top: 20px;
                    padding: 15px;
                    background: ${draculaTheme.currentLine};
                    border-radius: 8px;
                    max-width: 500px;
                    text-align: left;
                    border-left: 4px solid ${draculaTheme.orange};
                `;
                troubleshoot.innerHTML = `
                    <h4 style="margin: 0 0 10px 0; color: ${draculaTheme.orange}">Cookie Troubleshooting:</h4>
                    <ul style="margin: 0; padding-left: 20px; color: ${draculaTheme.comment}">
                        <li>HttpOnly cookies cannot be accessed by JavaScript</li>
                        <li>Check DevTools > Application > Cookies for all cookies</li>
                        <li>Some cookies might be set for specific paths</li>
                        <li>Cross-domain cookies have restricted access</li>
                    </ul>
                `;
                emptyMsg.appendChild(troubleshoot);
            }
            
            dataTable.appendChild(emptyMsg);
            return;
        }
        
        const table = document.createElement('table');
        table.style.cssText = `
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            font-size: 14px;
            border-radius: 8px;
            overflow: hidden;
        `;
        
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr style="background: ${draculaTheme.currentLine};">
                <th style="padding: 16px; text-align: left; border-bottom: 2px solid ${draculaTheme.comment}; color: ${draculaTheme.cyan};">Key</th>
                <th style="padding: 16px; text-align: left; border-bottom: 2px solid ${draculaTheme.comment}; width: 120px; color: ${draculaTheme.cyan};">Type</th>
                <th style="padding: 16px; text-align: left; border-bottom: 2px solid ${draculaTheme.comment}; width: 100px; color: ${draculaTheme.cyan};">Size</th>
                <th style="padding: 16px; text-align: left; border-bottom: 2px solid ${draculaTheme.comment}; width: 160px; color: ${draculaTheme.cyan};">Actions</th>
            </tr>
        `;
        
        const tbody = document.createElement('tbody');
        
        data.forEach((item, index) => {
            const row = document.createElement('tr');
            row.style.cssText = `
                border-bottom: 1px solid ${draculaTheme.comment};
                background: ${index % 2 === 0 ? draculaTheme.background : draculaTheme.currentLine};
                transition: all 0.2s ease;
            `;
            
            row.addEventListener('mouseenter', () => {
                row.style.background = `rgba(${type === 'local' ? '80, 250, 123' : type === 'session' ? '139, 233, 253' : '255, 184, 108'}, 0.1)`;
                row.style.transform = 'translateX(4px)';
            });
            
            row.addEventListener('mouseleave', () => {
                row.style.background = index % 2 === 0 ? draculaTheme.background : draculaTheme.currentLine;
                row.style.transform = 'translateX(0)';
            });
            
            const typeIcon = item.type === 'local' ? '📦' : item.type === 'session' ? '💾' : '🍪';
            const typeName = item.type === 'local' ? 'Local' : item.type === 'session' ? 'Session' : 'Cookie';
            const typeColor = item.type === 'local' ? draculaTheme.green : 
                            item.type === 'session' ? draculaTheme.cyan : draculaTheme.orange;
            const sizeKB = (item.size / 1024).toFixed(2);
            
            row.innerHTML = `
                <td style="padding: 14px 16px; font-weight: 500; max-width: 350px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${item.key}">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="color: ${typeColor}; font-size: 16px;">${typeIcon}</span>
                        <span>${item.key}</span>
                    </div>
                </td>
                <td style="padding: 14px 16px; color: ${typeColor}; font-weight: 600;">${typeName}</td>
                <td style="padding: 14px 16px; color: ${draculaTheme.pink};">${sizeKB} KB</td>
                <td style="padding: 14px 16px;">
                    <button class="view-btn" data-key="${item.key}" data-type="${item.type}" 
                            style="background: linear-gradient(135deg, ${draculaTheme.purple}, ${draculaTheme.pink}); 
                                   color: ${draculaTheme.background}; 
                                   border: none; 
                                   padding: 8px 16px; 
                                   border-radius: 6px; 
                                   cursor: pointer; 
                                   font-size: 13px; 
                                   font-weight: 600;
                                   margin-right: 8px;
                                   transition: all 0.2s ease;
                                   display: inline-flex;
                                   align-items: center;
                                   gap: 6px;">
                        👁 View
                    </button>
                    <button class="delete-btn" data-key="${item.key}" data-type="${item.type}" 
                            style="background: rgba(255, 85, 85, 0.1); 
                                   color: ${draculaTheme.red}; 
                                   border: 1px solid ${draculaTheme.red}; 
                                   padding: 8px 16px; 
                                   border-radius: 6px; 
                                   cursor: pointer; 
                                   font-size: 13px; 
                                   font-weight: 600;
                                   transition: all 0.2s ease;
                                   display: inline-flex;
                                   align-items: center;
                                   gap: 6px;">
                        🗑️
                    </button>
                </td>
            `;
            
            tbody.appendChild(row);
        });
        
        table.appendChild(thead);
        table.appendChild(tbody);
        dataTable.appendChild(table);
        
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('mouseenter', (e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(189, 147, 249, 0.4)';
            });
            
            btn.addEventListener('mouseleave', (e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
            });
            
            btn.addEventListener('click', (e) => {
                const key = e.target.dataset.key;
                const type = e.target.dataset.type;
                viewItem(key, type);
            });
        });
        
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('mouseenter', (e) => {
                e.target.style.background = draculaTheme.red;
                e.target.style.color = draculaTheme.background;
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(255, 85, 85, 0.4)';
            });
            
            btn.addEventListener('mouseleave', (e) => {
                e.target.style.background = 'rgba(255, 85, 85, 0.1)';
                e.target.style.color = draculaTheme.red;
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
            });
            
            btn.addEventListener('click', (e) => {
                const key = e.target.dataset.key;
                const type = e.target.dataset.type;
                if (confirm(`🗑️ Delete "${key}" from ${type} vault?\n\nThis action cannot be undone.`)) {
                    deleteItem(key, type);
                    loadStorageData(type);
                }
            });
        });
    }
    
    function viewItem(key, type) {
        let value = '';
        let itemType = '';
        
        if (type === 'local') {
            value = localStorage.getItem(key);
            itemType = 'Local Vault';
        } else if (type === 'session') {
            value = sessionStorage.getItem(key);
            itemType = 'Session Vault';
        } else if (type === 'cookie') {
            const cookies = getAllCookies();
            const cookie = cookies.find(c => c.key === key);
            value = cookie ? cookie.value : '';
            itemType = 'Cookie Jar';
        }
        
        let formattedValue = value;
        let isJSON = false;
        try {
            const parsed = JSON.parse(value);
            formattedValue = JSON.stringify(parsed, null, 2);
            isJSON = true;
        } catch (e) {}
        
        detailTitle.textContent = `${itemType}: ${key}`;
        
        if (isJSON) {
            detailContent.innerHTML = `<pre style="margin: 0;">${escapeHtml(formattedValue)}</pre>`;
            detailContent.innerHTML = detailContent.innerHTML
                .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?)/g, '<span style="color: #f1fa8c;">$1</span>')
                .replace(/\b(true|false|null)\b/g, '<span style="color: #ff79c6;">$1</span>')
                .replace(/\b-?\d+(\.\d+)?([eE][+-]?\d+)?\b/g, '<span style="color: #bd93f9;">$0</span>');
        } else {
            detailContent.textContent = formattedValue || '(empty value)';
        }
        
        overlay.style.display = 'block';
        setTimeout(() => {
            detailViewer.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 10);
    }
    
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    function deleteItem(key, type) {
        if (type === 'local') {
            localStorage.removeItem(key);
        } else if (type === 'session') {
            sessionStorage.removeItem(key);
        } else if (type === 'cookie') {
            document.cookie = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            document.cookie = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
        }
    }
    
    function clearAllData() {
        const confirmation = confirm(`⚠️ DANGER ZONE ⚠️\n\nThis will PERMANENTLY delete ALL:\n• Local Vault (${localStorage.length} items)\n• Session Vault (${sessionStorage.length} items)\n• Cookie Jar (${getAllCookies().length} items)\n\nYou will likely be logged out of this site.\n\nType "DELETE" to confirm:`);
        
        if (confirmation) {
            const userInput = prompt('Please type DELETE to confirm permanent deletion:');
            if (userInput === 'DELETE') {
                localStorage.clear();
                sessionStorage.clear();
                
                const cookies = getAllCookies();
                cookies.forEach(cookie => {
                    deleteItem(cookie.key, 'cookie');
                });
                
                document.cookie.split(";").forEach(function(c) {
                    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
                });
                
                loadStorageData('local');
                
                setTimeout(() => {
                    alert('✅ All vaults have been cleared!\n\nThe page may need to be refreshed.');
                }, 100);
            } else {
                alert('Clear operation cancelled.');
            }
        }
    }
    
    minimizeBtn.addEventListener('click', () => {
        inspector.style.display = 'none';
        minimizedBtn.style.display = 'flex';
    });
    
    minimizedBtn.addEventListener('click', () => {
        inspector.style.display = 'flex';
        minimizedBtn.style.display = 'none';
    });
    
    closeBtn.addEventListener('click', () => {
        if (confirm('Close ClientVault?')) {
            document.body.removeChild(inspector);
            document.body.removeChild(minimizedBtn);
            document.body.removeChild(overlay);
            document.body.removeChild(detailViewer);
            clearInterval(refreshInterval);
            delete window.__CLIENTVAULT_INSPECTOR;
        }
    });
    
    clearAllBtn.addEventListener('click', clearAllData);
    
    closeDetailBtn.addEventListener('click', () => {
        detailViewer.style.transform = 'translate(-50%, -50%) scale(0)';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    });
    
    overlay.addEventListener('click', () => {
        detailViewer.style.transform = 'translate(-50%, -50%) scale(0)';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.style.display === 'block') {
            detailViewer.style.transform = 'translate(-50%, -50%) scale(0)';
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 300);
        }
        
        if (e.ctrlKey && e.shiftKey && e.key === 'X' && inspector.style.display !== 'none') {
            closeBtn.click();
        }
        
        if (e.ctrlKey && e.key === 'r' && inspector.style.display !== 'none') {
            e.preventDefault();
            const activeBtn = document.querySelector('#clientvault-inspector .vault-section-btn.active');
            if (activeBtn) {
                loadStorageData(activeBtn.dataset.type);
            }
        }
    });
    
    console.log('%c🔐 ClientVault – Storage & Cookie Inspector', `color: ${draculaTheme.purple}; font-size: 16px; font-weight: bold;`);
    console.log('%cCreated by URDev • https://github.com/urdev4ever', `color: ${draculaTheme.cyan};`);
    console.log('%cActive on:', `color: ${draculaTheme.green};`, window.location.hostname);
    
    let refreshInterval = setInterval(() => {
        if (inspector.style.display !== 'none') {
            const activeBtn = document.querySelector('#clientvault-inspector .vault-section-btn.active');
            if (activeBtn) {
                loadStorageData(activeBtn.dataset.type);
            }
        }
    }, 5000);
})();
