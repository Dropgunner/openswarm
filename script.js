document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active nav link
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
        });
    });
    
    // Initialize swarm animation
    initSwarmAnimation();
    
    // Initialize value cards hover effects
    initValueCards();
    
    // Initialize metacognitive items hover effects
    initMetacognitiveItems();
    
    // Initialize architecture layer interactions
    initArchitectureLayers();
    
    // Initialize implementation timeline interactions
    initImplementationTimeline();
});

// Swarm Animation
function initSwarmAnimation() {
    const centralNode = document.querySelector('.central-node');
    const satelliteNodes = document.querySelectorAll('.satellite-node');
    const connections = document.querySelectorAll('.connection');
    
    // Set up connections between central node and satellite nodes
    updateConnections();
    
    // Add pulse animation to central node
    setInterval(() => {
        centralNode.style.transform = 'translate(-50%, -50%) scale(1.1)';
        setTimeout(() => {
            centralNode.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 300);
    }, 3000);
    
    // Add random movement to satellite nodes
    satelliteNodes.forEach(node => {
        animateSatelliteNode(node);
    });
    
    // Update connections when nodes move
    setInterval(updateConnections, 100);
    
    function updateConnections() {
        const centralRect = centralNode.getBoundingClientRect();
        const centralX = centralRect.left + centralRect.width / 2;
        const centralY = centralRect.top + centralRect.height / 2;
        
        satelliteNodes.forEach((node, index) => {
            const connection = connections[index];
            const nodeRect = node.getBoundingClientRect();
            const nodeX = nodeRect.left + nodeRect.width / 2;
            const nodeY = nodeRect.top + nodeRect.height / 2;
            
            // Calculate distance and angle
            const dx = nodeX - centralX;
            const dy = nodeY - centralY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx) * 180 / Math.PI;
            
            // Position and rotate connection
            connection.style.width = `${distance}px`;
            connection.style.height = '2px';
            connection.style.left = `${centralX}px`;
            connection.style.top = `${centralY}px`;
            connection.style.transform = `rotate(${angle}deg)`;
        });
    }
    
    function animateSatelliteNode(node) {
        const originalTop = parseInt(window.getComputedStyle(node).top);
        const originalLeft = parseInt(window.getComputedStyle(node).left);
        
        // Random movement range
        const rangeX = 15;
        const rangeY = 15;
        
        // Random duration
        const duration = 2000 + Math.random() * 3000;
        
        function moveNode() {
            // Calculate random position within range
            const newTop = originalTop + (Math.random() * rangeY * 2 - rangeY);
            const newLeft = originalLeft + (Math.random() * rangeX * 2 - rangeX);
            
            // Animate to new position
            node.style.transition = `top ${duration/1000}s ease, left ${duration/1000}s ease`;
            node.style.top = `${newTop}px`;
            node.style.left = `${newLeft}px`;
            
            // Schedule next movement
            setTimeout(moveNode, duration);
        }
        
        moveNode();
    }
}

// Value Cards Interactions
function initValueCards() {
    const valueCards = document.querySelectorAll('.value-card');
    
    valueCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add highlight effect
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
            
            // Enlarge icon
            const icon = this.querySelector('.value-icon');
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            // Remove highlight effect
            this.style.transform = '';
            this.style.boxShadow = '';
            
            // Reset icon
            const icon = this.querySelector('.value-icon');
            icon.style.transform = '';
        });
    });
}

// Metacognitive Items Interactions
function initMetacognitiveItems() {
    const metacognitiveItems = document.querySelectorAll('.metacognitive-item');
    
    metacognitiveItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Add highlight effect
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
            
            // Enlarge icon
            const icon = this.querySelector('.meta-icon');
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            // Remove highlight effect
            this.style.transform = '';
            this.style.boxShadow = '';
            
            // Reset icon
            const icon = this.querySelector('.meta-icon');
            icon.style.transform = '';
        });
    });
}

// Architecture Layers Interactions
function initArchitectureLayers() {
    const architectureLayers = document.querySelectorAll('.architecture-layer');
    
    architectureLayers.forEach(layer => {
        layer.addEventListener('click', function() {
            // Toggle expanded state
            this.classList.toggle('expanded');
            
            if (this.classList.contains('expanded')) {
                // Expand layer
                this.style.transform = 'scale(1.02)';
                
                // Highlight components
                const components = this.querySelectorAll('.component');
                components.forEach((component, index) => {
                    setTimeout(() => {
                        component.style.transform = 'scale(1.1)';
                        component.style.transition = 'transform 0.3s ease';
                    }, index * 50);
                });
            } else {
                // Collapse layer
                this.style.transform = '';
                
                // Reset components
                const components = this.querySelectorAll('.component');
                components.forEach(component => {
                    component.style.transform = '';
                });
            }
        });
    });
}

// Implementation Timeline Interactions
function initImplementationTimeline() {
    const timelinePhases = document.querySelectorAll('.timeline-phase');
    
    timelinePhases.forEach(phase => {
        phase.addEventListener('mouseenter', function() {
            // Highlight phase
            const phaseContent = this.querySelector('.phase-content');
            phaseContent.style.transform = 'translateX(15px)';
            phaseContent.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
            
            // Enlarge icon
            const icon = this.querySelector('.phase-icon');
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.3s ease';
            
            // Show details
            const details = this.querySelector('.phase-details');
            details.style.maxHeight = '500px';
            details.style.opacity = '1';
        });
        
        phase.addEventListener('mouseleave', function() {
            // Reset phase
            const phaseContent = this.querySelector('.phase-content');
            phaseContent.style.transform = '';
            phaseContent.style.boxShadow = '';
            
            // Reset icon
            const icon = this.querySelector('.phase-icon');
            icon.style.transform = '';
            
            // Hide details
            const details = this.querySelector('.phase-details');
            details.style.maxHeight = '';
            details.style.opacity = '';
        });
    });
}

// Add window resize handler to update connections in swarm animation
window.addEventListener('resize', function() {
    // Update connections in swarm animation
    const connections = document.querySelectorAll('.connection');
    if (connections.length > 0) {
        updateConnections();
    }
    
    function updateConnections() {
        const centralNode = document.querySelector('.central-node');
        const satelliteNodes = document.querySelectorAll('.satellite-node');
        const connections = document.querySelectorAll('.connection');
        
        if (!centralNode) return;
        
        const centralRect = centralNode.getBoundingClientRect();
        const centralX = centralRect.left + centralRect.width / 2;
        const centralY = centralRect.top + centralRect.height / 2;
        
        satelliteNodes.forEach((node, index) => {
            const connection = connections[index];
            const nodeRect = node.getBoundingClientRect();
            const nodeX = nodeRect.left + nodeRect.width / 2;
            const nodeY = nodeRect.top + nodeRect.height / 2;
            
            // Calculate distance and angle
            const dx = nodeX - centralX;
            const dy = nodeY - centralY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx) * 180 / Math.PI;
            
            // Position and rotate connection
            connection.style.width = `${distance}px`;
            connection.style.height = '2px';
            connection.style.left = `${centralX}px`;
            connection.style.top = `${centralY}px`;
            connection.style.transform = `rotate(${angle}deg)`;
        });
    }
});
