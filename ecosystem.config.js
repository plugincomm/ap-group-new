module.exports = {
  apps: [
    {
      name: 'nextjs',
      cwd: '/var/www/nextjs/',
      script: 'npm',
      args: 'start',
	  watch: false,
      env_production: {
		  NODE_ENV: 'production',		
		  PORT:8080
		},
    },
  ],
};
 