# Build
custom_build(
    # Name of the container image
    ref = 'dashboard-ui:dev',
    # Command to build the container image
    command = 'npm run build-image', # Command
    # Files to watch that trigger a new build
    deps = ['src', 'public', 'next.config.js', 'package.json', 'package.lock.json'],
    disable_push=True,
    tag='dev'
)

# Deploy
k8s_yaml(['k8s/deployment.yml', 'k8s/service.yml'])

# Manage
k8s_resource('dashboard-ui', port_forwards=['3000'])
