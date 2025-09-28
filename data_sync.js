/**
 * SYSTÈME DE SYNCHRONISATION CENTRALISÉ
 * Gestionnaire de données unifié pour tous les modules
 * Équipe 41 - Altrad Prezioso
 */

class DataSyncManager {
    constructor() {
        this.storageKeys = {
            team: 'gestionChantierTeamData',
            planning: 'gestionChantierPlanningData',
            pointage: 'planning_hebdo',
            affectations: 'planning_affectations',
            materiaux: 'gestionChantierMateriauxData',
            reunions: 'gestionChantierReunionsData'
        };
        
        this.subscribers = {};
        this.isInitialized = false;
        
        // Initialiser le système
        this.init();
    }

    /**
     * Initialisation du système de synchronisation
     */
    init() {
        console.log('🔄 Initialisation du système de synchronisation...');
        
        // Créer les données par défaut si elles n'existent pas
        this.initializeDefaultData();
        
        // Écouter les changements de localStorage
        window.addEventListener('storage', (e) => {
            this.handleStorageChange(e);
        });
        
        // Écouter les événements personnalisés
        window.addEventListener('dataUpdated', (e) => {
            this.handleDataUpdate(e);
        });
        
        this.isInitialized = true;
        console.log('✅ Système de synchronisation initialisé');
    }

    /**
     * Initialiser les données par défaut
     */
    initializeDefaultData() {
        // Données d'équipe par défaut
        if (!localStorage.getItem(this.storageKeys.team)) {
            const defaultTeamData = {
                members: [
                    { id: 1, name: 'Martin Hangard', role: 'Responsable d\'agence', status: 'available', type: 'employee', phone: '06.XX.XX.XX.XX', email: 'martin.hangard@altrad.fr', skills: ['management', 'commercial', 'gestion'], experience: 15, chantierActuel: 'Direction', heuresSemaine: 42 },
                    { id: 2, name: 'Sylvain Garreau', role: 'Chargé d\'affaires', status: 'available', type: 'employee', phone: '06.XX.XX.XX.XX', email: 'sylvain.garreau@altrad.fr', skills: ['commercial', 'devis', 'suivi-client'], experience: 10, chantierActuel: 'Commercial', heuresSemaine: 40 },
                    { id: 3, name: 'ERTUGRUL', role: 'Conducteur de travaux', status: 'available', type: 'conducteur', employeeType: 'conducteur', phone: '06.12.34.56.78', email: 'ertugrul@altrad.fr', skills: ['management', 'planning', 'qualité'], experience: 8, chantierActuel: 'VICHY', heuresSemaine: 45 },
                    { id: 4, name: 'Lou Piedigrossi', role: 'HSE', status: 'available', type: 'employee', phone: '06.XX.XX.XX.XX', email: 'lou.piedigrossi@altrad.fr', skills: ['sécurité', 'environnement', 'formation'], experience: 6, chantierActuel: 'Multi-sites', heuresSemaine: 38 },
                    { id: 5, name: 'A MOHAMED', role: 'Opérateur', status: 'available', type: 'employee', phone: '06.XX.XX.XX.XX', email: 'a.mohamed@altrad.fr', skills: ['pistoleur', 'sableur'], experience: 4, chantierActuel: 'CAMPENON BERNARD', heuresSemaine: 37 },
                    { id: 6, name: 'ANTUNEZ LOIC', role: 'Chef d\'équipe', status: 'available', type: 'employee', phone: '06.XX.XX.XX.XX', email: 'loic.antunez@altrad.fr', skills: ['grenailleur', 'forme-amiante'], experience: 6, chantierActuel: 'EFFIA PARKING', heuresSemaine: 40 },
                    { id: 7, name: 'BLANC MARQUIS D', role: 'Opérateur', status: 'available', type: 'employee', phone: '06.XX.XX.XX.XX', email: 'marquis.blanc@altrad.fr', skills: ['pistoleur', 'acqpa'], experience: 7, chantierActuel: 'VICHY', heuresSemaine: 35 },
                    { id: 8, name: 'CLEMENTE MICKAEL', role: 'Opérateur', status: 'available', type: 'employee', phone: '06.XX.XX.XX.XX', email: 'mickael.clemente@altrad.fr', skills: ['caces-nacelle', 'sableur'], experience: 5, chantierActuel: 'PONT DE CHASSE', heuresSemaine: 38 },
                    { id: 9, name: 'CUKUR AYHAN', role: 'Chef de chantier', status: 'available', type: 'employee', phone: '06.XX.XX.XX.XX', email: 'ayhan.cukur@altrad.fr', skills: ['management', 'grenailleur'], experience: 9, chantierActuel: 'CAMPENON BERNARD', heuresSemaine: 42 },
                    { id: 10, name: 'CUKUR MUSTAFA', role: 'Opérateur', status: 'available', type: 'employee', phone: '06.XX.XX.XX.XX', email: 'mustafa.cukur@altrad.fr', skills: ['sableur', 'pistoleur'], experience: 11, chantierActuel: 'VICHY', heuresSemaine: 39 },
                    { id: 11, name: 'MORGADO ALEX', role: 'Opérateur', status: 'formation', reason: 'Formation ATEX', type: 'employee', phone: '06.XX.XX.XX.XX', email: 'alex.morgado@altrad.fr', skills: ['pistoleur', 'forme-amiante'], experience: 3, chantierActuel: 'Formation', heuresSemaine: 0, dateDebut: '2025-09-15', dateFin: '2025-09-19' },
                    { id: 12, name: 'ROCHDI YOUSSEF', role: 'Opérateur', status: 'available', type: 'employee', phone: '06.XX.XX.XX.XX', email: 'youssef.rochdi@altrad.fr', skills: ['grenailleur', 'sableur'], experience: 4, chantierActuel: 'EFFIA PARKING', heuresSemaine: 36 },
                    { id: 13, name: 'GRANDADAM G', role: 'Chef de chantier', status: 'available', type: 'employee', phone: '06.XX.XX.XX.XX', email: 'g.grandadam@altrad.fr', skills: ['management', 'acqpa'], experience: 8, chantierActuel: 'VICHY', heuresSemaine: 35 },
                    { id: 14, name: 'HADIDI A', role: 'Opérateur', status: 'available', type: 'employee', phone: '06.XX.XX.XX.XX', email: 'a.hadidi@altrad.fr', skills: ['pistoleur', 'caces-nacelle'], experience: 6, chantierActuel: 'CAMPENON BERNARD', heuresSemaine: 40 },
                    { id: 15, name: 'ROBIC NICOLAS', role: 'Opérateur', status: 'available', type: 'employee', phone: '06.XX.XX.XX.XX', email: 'nicolas.robic@altrad.fr', skills: ['caces-nacelle', 'forme-plomb'], experience: 7, chantierActuel: 'PONT DE CHASSE', heuresSemaine: 37 },
                    { id: 16, name: 'RIBEIRO-CASAL A', role: 'Chef d\'équipe', status: 'conge', reason: 'Congé annuel', dateDebut: '2025-09-22', dateFin: '2025-10-03', type: 'employee', phone: '06.34.56.78.90', email: 'antonio.ribeiro@altrad.fr', skills: ['grenailleur', 'sableur', 'forme-amiante'], experience: 12, chantierActuel: 'Congé', heuresSemaine: 0 },
                    { id: 17, name: 'MOREAU JC', role: 'Chef d\'équipe', status: 'available', type: 'employee', phone: '06.XX.XX.XX.XX', email: 'jc.moreau@altrad.fr', skills: ['management', 'pistoleur', 'acqpa'], experience: 15, chantierActuel: 'EFFIA PARKING', heuresSemaine: 38 },
                    { id: 18, name: 'FARID MESSAL', role: 'HSE', status: 'formation', reason: 'Formation ISO', type: 'employee', phone: '06.XX.XX.XX.XX', email: 'farid.messal@altrad.fr', skills: ['sécurité', 'environnement'], experience: 5, chantierActuel: 'Formation', heuresSemaine: 0, dateDebut: '2025-09-29', dateFin: '2025-10-01' },
                    { id: 19, name: 'MENDY jeune', role: 'Opérateur', status: 'available', type: 'interimaire', phone: '06.XX.XX.XX.XX', email: 'mendy.jeune@interim.fr', skills: ['pistoleur', 'sableur'], experience: 1, chantierActuel: 'VICHY', heuresSemaine: 35 },
                    { id: 20, name: 'Ag45-1', role: 'Opérateur', status: 'available', type: 'interimaire', phone: '06.XX.XX.XX.XX', email: 'ag45-1@interim.fr', skills: ['grenailleur', 'sableur'], experience: 2, chantierActuel: 'CAMPENON BERNARD', heuresSemaine: 40 },
                    { id: 21, name: 'MENDY Doyen', role: 'Chef d\'équipe', status: 'available', type: 'employee', phone: '06.XX.XX.XX.XX', email: 'mendy.doyen@altrad.fr', skills: ['pistoleur', 'acqpa', 'forme-amiante'], experience: 20, chantierActuel: 'PONT DE CHASSE', heuresSemaine: 35 },
                    { id: 22, name: 'DJEBBAR Khalil', role: 'Opérateur', status: 'formation', reason: 'Formation ATEX', type: 'employee', phone: '06.23.45.67.89', email: 'khalil.djebbar@altrad.fr', skills: ['pistoleur', 'grenailleur', 'caces-nacelle'], experience: 5, chantierActuel: 'Formation', heuresSemaine: 0, dateDebut: '2025-09-15', dateFin: '2025-09-19' },
                    { id: 23, name: 'NASSER MESSAL', role: 'Opérateur', status: 'maladie', reason: 'Arrêt maladie', dateDebut: '2025-09-10', dateFin: '2025-09-24', type: 'employee', phone: '06.45.67.89.01', email: 'nasser.messal@altrad.fr', skills: ['pistoleur', 'sableur'], experience: 6, chantierActuel: 'Arrêt maladie', heuresSemaine: 0 },
                    { id: 24, name: 'LAARAJ', role: 'Opérateur', status: 'available', type: 'altrad-autres', phone: '06.XX.XX.XX.XX', email: 'laaraj@altrad.fr', skills: ['grenailleur', 'forme-plomb'], experience: 8, chantierActuel: 'EFFIA PARKING', heuresSemaine: 38, odmRequired: true, odmDateDebut: '2025-09-20', odmDateFin: '2025-09-27', odmChantier: 'EFFIA PARKING' }
                ],
                contractors: [
                    { id: 101, name: 'EURO PEINTURE', type: 'contractor', role: 'Spécialiste Peinture', status: 'available', phone: '04.XX.XX.XX.XX', email: 'contact@europeinture.fr', skills: ['pistoleur', 'finition'], specialite: 'Peinture industrielle et décorative', disponible: true },
                    { id: 102, name: 'SAINT\'ELEC', type: 'contractor', role: 'Électricien', status: 'available', phone: '04.XX.XX.XX.XX', email: 'contact@saintelec.fr', skills: ['électricité', 'installation'], specialite: 'Installations électriques industrielles', disponible: true },
                    { id: 103, name: 'GUILLE Pascal', type: 'contractor', role: 'Spécialiste', status: 'available', phone: '06.XX.XX.XX.XX', email: 'pascal.guille@freelance.fr', skills: ['grenailleur', 'forme-amiante'], specialite: 'Grenaillage et préparation surface', disponible: true },
                    { id: 104, name: 'AUTRES', type: 'contractor', role: 'Divers', status: 'available', phone: 'Variable', email: 'Variable', skills: ['divers'], specialite: 'Autres sous-traitants selon besoins', disponible: true }
                ],
                pointageHistory: {},
                lastUpdated: new Date().toISOString()
            };
            this.saveData('team', defaultTeamData);
        }

        // Données de chantiers par défaut
        if (!localStorage.getItem(this.storageKeys.planning)) {
            const defaultChantiers = [
                { id: 1, nom: 'Halle 9', code: '22541114486', statut: 'En cours', progression: 25, personnel: 2 },
                { id: 2, nom: 'Grand Lyon – Pont de Chasse', code: '2211113275', statut: 'En cours', progression: 75, personnel: 8 },
                { id: 3, nom: 'VICHY', code: '22341113974', statut: 'En cours', progression: 45, personnel: 6 },
                { id: 4, nom: 'CAMPENON BERNARD', code: '22441114303', statut: 'En cours', progression: 60, personnel: 5 },
                { id: 5, nom: 'EFFIA PARKING BARET', code: '22541114454', statut: 'Démarrage', progression: 30, personnel: 4 },
                { id: 6, nom: 'EFFIA PARKING CANNES', code: '22541114465', statut: 'En cours', progression: 40, personnel: 3 },
                { id: 7, nom: 'Mirage 2000', code: '22541100038', statut: 'En cours', progression: 50, personnel: 2 },
                { id: 8, nom: 'QPARK FAVENTINE', code: '', statut: 'Préparation', progression: 10, personnel: 1 },
                { id: 9, nom: 'BOUYGUE - VELODROME', code: '22541114488', statut: 'En cours', progression: 35, personnel: 3 },
                { id: 10, nom: 'FRAMATOME', code: '22141100002', statut: 'Finalisation', progression: 90, personnel: 3 },
                { id: 11, nom: 'Atelier St Maurice', code: '', statut: 'En cours', progression: 20, personnel: 2 },
                { id: 12, nom: 'SAINT GOBAIN - Atelier', code: '22541100038', statut: 'En cours', progression: 55, personnel: 4 },
                { id: 13, nom: 'EFFIA – MONTPELLIER', code: '22541100038', statut: 'En cours', progression: 30, personnel: 2 },
                { id: 14, nom: 'EFFIA – Parking Cour JULIEN', code: '22541114490', statut: 'En cours', progression: 25, personnel: 2 },
                { id: 15, nom: 'CNR VAUGRIS', code: '22541100038', statut: 'En cours', progression: 40, personnel: 3 },
                { id: 16, nom: 'QPARK HDV Marseille', code: '', statut: 'Préparation', progression: 5, personnel: 1 },
                { id: 17, nom: 'EFFIA BEZIERS', code: '22541100038', statut: 'En cours', progression: 35, personnel: 2 },
                { id: 18, nom: 'EFFIA – Parking Chateaucreux', code: '22341114193', statut: 'En cours', progression: 45, personnel: 3 },
                { id: 19, nom: 'ADISEO PONTICELLI', code: '22541100038', statut: 'En cours', progression: 30, personnel: 2 },
                { id: 99, nom: 'Autre chantier', code: '', statut: 'Préparation', progression: 0, personnel: 0 }
            ];
            this.saveData('planning', { chantiers: defaultChantiers, lastUpdated: new Date().toISOString() });
        }
    }

    /**
     * Sauvegarder des données
     */
    saveData(type, data) {
        try {
            const dataWithTimestamp = {
                ...data,
                lastUpdated: new Date().toISOString(),
                version: '1.0'
            };
            localStorage.setItem(this.storageKeys[type], JSON.stringify(dataWithTimestamp));
            
            // Notifier tous les abonnés
            this.notifySubscribers(type, dataWithTimestamp);
            
            // Déclencher un événement personnalisé
            window.dispatchEvent(new CustomEvent('dataUpdated', {
                detail: { type, data: dataWithTimestamp }
            }));
            
            console.log(`💾 Données ${type} sauvegardées et synchronisées`);
            return true;
        } catch (error) {
            console.error(`❌ Erreur lors de la sauvegarde des données ${type}:`, error);
            return false;
        }
    }

    /**
     * Charger des données
     */
    loadData(type) {
        try {
            const data = localStorage.getItem(this.storageKeys[type]);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error(`❌ Erreur lors du chargement des données ${type}:`, error);
            return null;
        }
    }

    /**
     * S'abonner aux mises à jour d'un type de données
     */
    subscribe(type, callback, moduleName = 'unknown') {
        if (!this.subscribers[type]) {
            this.subscribers[type] = [];
        }
        
        this.subscribers[type].push({ callback, moduleName });
        console.log(`📡 Module ${moduleName} abonné aux mises à jour ${type}`);
        
        // Retourner une fonction de désabonnement
        return () => {
            this.subscribers[type] = this.subscribers[type].filter(sub => sub.moduleName !== moduleName);
            console.log(`📡 Module ${moduleName} désabonné des mises à jour ${type}`);
        };
    }

    /**
     * Notifier tous les abonnés
     */
    notifySubscribers(type, data) {
        if (this.subscribers[type]) {
            this.subscribers[type].forEach(subscriber => {
                try {
                    subscriber.callback(data);
                } catch (error) {
                    console.error(`❌ Erreur dans le callback du module ${subscriber.moduleName}:`, error);
                }
            });
        }
    }

    /**
     * Gérer les changements de localStorage
     */
    handleStorageChange(event) {
        // Trouver le type de données modifié
        const type = Object.keys(this.storageKeys).find(key => this.storageKeys[key] === event.key);
        
        if (type && event.newValue) {
            try {
                const data = JSON.parse(event.newValue);
                this.notifySubscribers(type, data);
                console.log(`🔄 Données ${type} mises à jour via localStorage`);
            } catch (error) {
                console.error(`❌ Erreur lors du parsing des données ${type}:`, error);
            }
        }
    }

    /**
     * Gérer les événements de mise à jour
     */
    handleDataUpdate(event) {
        const { type, data } = event.detail;
        console.log(`🔄 Événement de mise à jour reçu pour ${type}`);
    }

    /**
     * Synchroniser les données d'équipe avec tous les modules
     */
    syncTeamData(teamData) {
        this.saveData('team', teamData);
        
        // Mettre à jour automatiquement les autres modules qui dépendent de l'équipe
        this.updateDependentModules(teamData);
    }

    /**
     * Mettre à jour les modules dépendants
     */
    updateDependentModules(teamData) {
        // Mettre à jour les données de pointage si nécessaire
        const pointageData = this.loadData('pointage');
        if (pointageData && pointageData.equipe) {
            // Synchroniser la liste d'équipe dans le pointage
            pointageData.equipe = teamData.members.filter(m => m.type !== 'contractor');
            this.saveData('pointage', pointageData);
        }

        // Mettre à jour les affectations si nécessaire
        const affectationsData = this.loadData('affectations');
        if (affectationsData) {
            // Synchroniser les membres disponibles
            const availableMembers = teamData.members.filter(m => m.status === 'available' && m.type !== 'contractor');
            if (affectationsData.availableMembers) {
                affectationsData.availableMembers = availableMembers;
                this.saveData('affectations', affectationsData);
            }
        }
    }

    /**
     * Obtenir les statistiques globales
     */
    getGlobalStats() {
        const teamData = this.loadData('team');
        const planningData = this.loadData('planning');
        
        if (!teamData || !planningData) {
            return null;
        }

        const members = teamData.members.filter(m => m.type !== 'contractor');
        const availableMembers = members.filter(m => m.status === 'available');
        const chantiers = planningData.chantiers || [];
        const activeChantiers = chantiers.filter(c => c.statut === 'En cours' || c.statut === 'Démarrage');

        return {
            totalPersonnel: members.length,
            availablePersonnel: availableMembers.length,
            totalChantiers: chantiers.length,
            activeChantiers: activeChantiers.length,
            totalHours: chantiers.reduce((sum, c) => sum + (c.personnel * 35), 0),
            lastUpdated: teamData.lastUpdated
        };
    }

    /**
     * Exporter toutes les données
     */
    exportAllData() {
        const allData = {};
        
        Object.keys(this.storageKeys).forEach(type => {
            allData[type] = this.loadData(type);
        });
        
        allData.exportedAt = new Date().toISOString();
        allData.version = '1.0';
        
        return allData;
    }

    /**
     * Importer toutes les données
     */
    importAllData(data) {
        try {
            Object.keys(this.storageKeys).forEach(type => {
                if (data[type]) {
                    this.saveData(type, data[type]);
                }
            });
            
            console.log('✅ Toutes les données ont été importées et synchronisées');
            return true;
        } catch (error) {
            console.error('❌ Erreur lors de l\'import des données:', error);
            return false;
        }
    }

    /**
     * Réinitialiser toutes les données
     */
    resetAllData() {
        Object.values(this.storageKeys).forEach(key => {
            localStorage.removeItem(key);
        });
        
        this.initializeDefaultData();
        console.log('🔄 Toutes les données ont été réinitialisées');
    }

    /**
     * Nettoyer et synchroniser les données entre modules
     */
    cleanupAndSync() {
        try {
            console.log('🧹 Nettoyage et synchronisation des données...');
            
            // Vérifier et corriger les données d'équipe
            const teamData = this.loadData('team');
            if (teamData && teamData.members) {
                teamData.members.forEach(member => {
                    // S'assurer que employeeType est défini
                    if (!member.employeeType) {
                        member.employeeType = member.type || 'employee';
                    }
                    
                    // Corriger ERTUGRUL spécifiquement
                    if (member.name === 'ERTUGRUL' || member.name === 'Ertugrul') {
                        member.name = 'ERTUGRUL';
                        member.type = 'conducteur';
                        member.employeeType = 'conducteur';
                        member.role = 'Conducteur de travaux';
                    }
                });
                
                this.saveData('team', teamData);
                console.log('✅ Données d\'équipe nettoyées et synchronisées');
            }
            
            // Nettoyer les données d'affectations
            const affectationsData = this.loadData('affectations');
            if (affectationsData) {
                // S'assurer que la structure est correcte
                if (!affectationsData.planningData) {
                    affectationsData.planningData = {};
                }
                if (!affectationsData.chantiers) {
                    affectationsData.chantiers = [];
                }
                
                this.saveData('affectations', affectationsData);
                console.log('✅ Données d\'affectations nettoyées et synchronisées');
            }
            
            return true;
        } catch (error) {
            console.error('❌ Erreur lors du nettoyage des données:', error);
            return false;
        }
    }
}

// Créer l'instance globale
window.dataSyncManager = new DataSyncManager();

// Fonctions de compatibilité pour les modules existants
window.syncTeamData = function(teamData) {
    return window.dataSyncManager.syncTeamData(teamData);
};

window.getSyncData = function() {
    return {
        team: window.dataSyncManager.loadData('team'),
        planning: window.dataSyncManager.loadData('planning'),
        pointage: window.dataSyncManager.loadData('pointage'),
        affectations: window.dataSyncManager.loadData('affectations'),
        materiaux: window.dataSyncManager.loadData('materiaux'),
        reunions: window.dataSyncManager.loadData('reunions')
    };
};

window.getGlobalStats = function() {
    return window.dataSyncManager.getGlobalStats();
};

window.exportAllData = function() {
    return window.dataSyncManager.exportAllData();
};

window.importAllData = function(data) {
    return window.dataSyncManager.importAllData(data);
};

window.resetAllData = function() {
    return window.dataSyncManager.resetAllData();
};

window.cleanupAndSync = function() {
    return window.dataSyncManager.cleanupAndSync();
};

// Auto-sauvegarde périodique
setInterval(() => {
    if (window.dataSyncManager.isInitialized) {
        console.log('🔄 Auto-sauvegarde des données...');
        // Ici on pourrait implémenter une sauvegarde automatique
    }
}, 300000); // Toutes les 5 minutes

console.log('🚀 Système de synchronisation chargé et prêt !');
