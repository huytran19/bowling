import Ammo from '../node_modules/ammojs-typed'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { threadId } from 'worker_threads'
import { ClampToEdgeWrapping, Vector3 } from 'three'

export default class Bowling {
	clock!: THREE.Clock
	renderer!: THREE.WebGLRenderer
	scene!: THREE.Scene
	camera!: THREE.PerspectiveCamera
	mesh!: THREE.Mesh<any, any>
	controls!: OrbitControls
	delta!: number
	ammoClone!: typeof Ammo
	rigidBodies: any[]
	tempTransform!: Ammo.btTransform
	collisionConfiguration!: Ammo.btDefaultCollisionConfiguration
	dispatcher!: Ammo.btCollisionDispatcher
	broadphase!: Ammo.btDbvtBroadphase
	solver!: Ammo.btSequentialImpulseConstraintSolver
	physicsWorld!: Ammo.btDiscreteDynamicsWorld
	raycaster!: THREE.Raycaster
	clickMouse!: THREE.Vector2
	moveMouse!: THREE.Vector2
	draggable!: THREE.Object3D
	found!: THREE.Intersection<THREE.Object3D<THREE.Event>>[]
	shootTime!: number
	isPop: boolean
	constructor() {
		this.rigidBodies = []

		this.createClock()
		this.createRenderer()
		this.createScene()
		this.createCamera()
		this.createGeometry()
		this.createLights()
		this.createControls()

		this.startAmmo()

		this.createRaycaster()

		this.onResize()
	}

	public createClock() {
		this.clock = new THREE.Clock()
	}

	public createRenderer() {
		this.renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true
		})
		this.renderer.setSize(window.innerWidth, window.innerHeight)
		this.renderer.setPixelRatio(window.devicePixelRatio || 1)
		this.renderer.autoClear = true
		this.renderer.toneMapping = THREE.ACESFilmicToneMapping
		this.renderer.toneMappingExposure = 1
		this.renderer.setClearColor(0x000015)
		this.renderer.shadowMap.enabled = true

		document.body.appendChild(this.renderer.domElement)
	}

	public createScene() {
		this.scene = new THREE.Scene()
	}

	public createCamera() {
		this.camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000)
		this.camera.position.z = 80
		this.camera.position.y = 40
		this.camera.lookAt(0,0, 20)
	}

	public createGeometry() {
		this.mesh = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), new THREE.MeshPhongMaterial({ color: 0xababab }))
		this.mesh.castShadow = true
		this.mesh.receiveShadow = true
	}

	public createLights() {
		let ambLight = new THREE.AmbientLight(0xcccccc, 1)
		this.scene.add(ambLight)

		let dirLight = new THREE.DirectionalLight(0xffffff, 1)
		dirLight.position.set( - 10, 18, 5 );
			dirLight.castShadow = true;
			const d = 50;
			dirLight.shadow.camera.left = - d;
			dirLight.shadow.camera.right = d;
			dirLight.shadow.camera.top = d;
			dirLight.shadow.camera.bottom = - d;

			dirLight.shadow.camera.near = 2;
			dirLight.shadow.camera.far = 50;

			dirLight.shadow.mapSize.x = 1024;
			dirLight.shadow.mapSize.y = 1024;
		this.scene.add(dirLight)
	}

	public createControls() {
		// this.controls = new OrbitControls(this.camera, this.renderer.domElement)
	}

	public startAmmo() {
		Ammo().then((Ammo) => {
			Ammo = Ammo
			this.ammoClone = Ammo
			this.createAmmo(Ammo)
		})
	}

	public createAmmo(Ammo = this.ammoClone) {
		this.tempTransform = new Ammo.btTransform()

		this.setupPhysicsWorld(Ammo)
		this.createPlane(Ammo)
		let pos = {x: 0, y: 3, z: 40}
		this.createBall(Ammo, pos, false)
		this.createBall2(Ammo)
		this.animate()
	}

	public setupPhysicsWorld(Ammo = this.ammoClone) {
		this.collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
    	this.dispatcher = new Ammo.btCollisionDispatcher(this.collisionConfiguration);
    	this.broadphase = new Ammo.btDbvtBroadphase();
    	this.solver = new Ammo.btSequentialImpulseConstraintSolver();

    	this.physicsWorld = new Ammo.btDiscreteDynamicsWorld(
        	this.dispatcher, this.broadphase, this.solver, this.collisionConfiguration);
    	this.physicsWorld.setGravity(new Ammo.btVector3(0, -9.8, 0));
	}

	public createPlane(Ammo = this.ammoClone) {
		let pos = { x: 0, y: 0, z: 0} 
		let scale = { x: 30, y: 2, z: 100}
		let quat = { x: 0, y: 0, z: 0, w: 1}
		let mass = 0

		let blockPlane = new THREE.Mesh(new THREE.BoxGeometry(scale.x, scale.y, scale.z), new THREE.MeshPhongMaterial({ color: 0xffffff }))
		blockPlane.position.set(pos.x, pos.y, pos.z)

		blockPlane.receiveShadow = true

		this.scene.add(blockPlane)

		let transform = new Ammo.btTransform()
		transform.setIdentity()
		transform.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z))
		transform.setRotation(new Ammo.btQuaternion(quat.x, quat.y, quat.z, quat.w))

		let defaultMotionState = new Ammo.btDefaultMotionState(transform)

		let localInertia = new Ammo.btVector3(0, 0, 0)

		let shape = new Ammo.btBoxShape(new Ammo.btVector3(scale.x * 0.5, scale.y * 0.5, scale.z * 0.5))
		shape.setMargin(0.05)
		shape.calculateLocalInertia(mass, localInertia)

		let RBody_Info = new Ammo.btRigidBodyConstructionInfo(mass, defaultMotionState, shape, localInertia)
		let RBody = new Ammo.btRigidBody(RBody_Info)

		this.physicsWorld.addRigidBody(RBody)

		// blockPlane.userData.physicsBody = RBody

		// this.rigidBodies.push(blockPlane)

		blockPlane.userData.ground = true
	}

	public createBall(Ammo = this.ammoClone, pos: {x: number, y: number, z: number}, isShoot: boolean) {
		let radius = 2
		let quat = { x: 0, y: 0, z: 0, w: 1}
		let mass = 100

		let ball = new THREE.Mesh(new THREE.SphereGeometry(radius), new THREE.MeshPhongMaterial({ color: 0xff0000 }))
		ball.position.set(pos.x, pos.y, pos.z)

		ball.castShadow = true
		ball.receiveShadow = true

		let transform = new Ammo.btTransform()
		transform.setIdentity()
		transform.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z))
		transform.setRotation(new Ammo.btQuaternion(quat.x, quat.y, quat.z, quat.w))

		let defaultMotionState = new Ammo.btDefaultMotionState(transform)

		let localInertia = new Ammo.btVector3(0, 0, 0)

		let shape = new Ammo.btSphereShape(radius)
		shape.setMargin(0.05)
		shape.calculateLocalInertia(mass, localInertia)

		let RBody_Info = new Ammo.btRigidBodyConstructionInfo(mass, defaultMotionState, shape, localInertia)
		let RBody = new Ammo.btRigidBody(RBody_Info)

		this.physicsWorld.addRigidBody(RBody)

		ball.userData.physicsBody = RBody

		this.rigidBodies.push(ball)

		ball.userData.draggable = true
		ball.name = 'BALL'

		this.scene.add(ball)

		if (isShoot) {
			let speed = new Ammo.btVector3(0, 0, -60)
			RBody.setLinearVelocity(speed)
		}
	}

	public createBall2(Ammo = this.ammoClone) {
		let pos = { x: 0, y: 3, z: -20} 
		let radius = 2
		let quat = { x: 0, y: 0, z: 0, w: 1}
		let mass = 1

		let ball = new THREE.Mesh(new THREE.SphereGeometry(radius), new THREE.MeshPhongMaterial({ color: 0x00ffff }))
		ball.position.set(pos.x, pos.y, pos.z)

		ball.castShadow = true
		ball.receiveShadow = true

		this.scene.add(ball)

		let transform = new Ammo.btTransform()
		transform.setIdentity()
		transform.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z))
		transform.setRotation(new Ammo.btQuaternion(quat.x, quat.y, quat.z, quat.w))

		let defaultMotionState = new Ammo.btDefaultMotionState(transform)

		let localInertia = new Ammo.btVector3(0, 0, 0)

		let shape = new Ammo.btSphereShape(radius)
		shape.setMargin(0.05)
		shape.calculateLocalInertia(mass, localInertia)

		let RBody_Info = new Ammo.btRigidBodyConstructionInfo(mass, defaultMotionState, shape, localInertia)
		let RBody = new Ammo.btRigidBody(RBody_Info)
		this.physicsWorld.addRigidBody(RBody)

		ball.userData.physicsBody = RBody

		this.rigidBodies.push(ball)
		// this.rigidBodies[0].userData.physicsBody.setLinearVelocity(new this.ammoClone.btVector3(2, 3, -20))
	}

	public onResize() {
		const windowWidth = window.innerWidth
		const windowHeight = window.innerHeight

		this.camera.aspect = windowWidth/windowHeight
		this.camera.updateProjectionMatrix()

		this.renderer.setSize(windowWidth, windowHeight)
	}

	animate = (): void => {
		this.delta = this.clock.getDelta()*2
		// this.controls.update()
		
		if (this.physicsWorld) {
			this.updatePhysics(this.delta)
		}
		this.dragObject()
		if (this.shootTime) {
			if (this.clock.elapsedTime - this.shootTime > 40) {
				if (this.isPop) {
					this.isPop = false
					this.scene.children.pop()
				}
			}
		}
		this.renderer.render(this.scene, this.camera)
		requestAnimationFrame(this.animate)
	}

	public updatePhysics(delta: number) {
		this.physicsWorld.stepSimulation( delta, 10 )

		for (let i = 0; i < this.rigidBodies.length; i++) {
			let threeObj = this.rigidBodies[i]
			let ammoObj = threeObj.userData.physicsBody
			let ms = ammoObj.getMotionState()

			if (ms) {
				ms.getWorldTransform(this.tempTransform)
				let pos = this.tempTransform.getOrigin()
				let quat = this.tempTransform.getRotation()
				threeObj.position.set(pos.x(), pos.y(), pos.z())
				threeObj.quaternion.set(quat.x(), quat.y(), quat.z(), quat.w())
			}
		}
	}

	public createRaycaster() {
		this.raycaster = new THREE.Raycaster()
		this.clickMouse = new THREE.Vector2()
		this.moveMouse = new THREE.Vector2()

		document.addEventListener( 'click', this.onPointerClick );
		document.addEventListener( 'mousemove', this.onPointerMove );
	}

	onPointerClick = (e: MouseEvent) => {
		if (this.draggable) {
			console.log(this.found[0].object.position);
			this.scene.remove(this.found[0].object)
			let pos = {x: this.draggable.position.x, y: 3, z: this.draggable.position.z}
			for (const o of this.scene.children) {
				console.log(o.name);
			}
			this.createBall(this.ammoClone, pos, true)
			this.isPop = true
			this.draggable = null as any
			this.shootTime = this.clock.getElapsedTime()
			
			return
		}
		this.clickMouse.x = (e.clientX / window.innerWidth) * 2 - 1
		this.clickMouse.y = - (e.clientY / window.innerHeight) * 2 + 1
		this.raycaster.setFromCamera(this.clickMouse, this.camera)
		this.found = this.raycaster.intersectObjects(this.scene.children)
		if (this.found.length > 0 && this.found[0].object.userData.draggable) {
			this.draggable = this.found[0].object
		}
	}

	onPointerMove = (e: MouseEvent) => {
		this.moveMouse.x = (e.clientX / window.innerWidth) * 2 - 1
		this.moveMouse.y = - (e.clientY / window.innerHeight) * 2 + 1
	}

	public dragObject() {
		if (this.draggable != null) {
			this.raycaster.setFromCamera(this.moveMouse, this.camera)
			this.found = this.raycaster.intersectObjects(this.scene.children)
			if (this.found.length > 0) {
				for (let o of this.found) {
					if (!o.object.userData.ground) {
						continue
					}
					this.draggable.position.x = o.point.x
					this.draggable.position.z = o.point.z
				}
			}
		}
	}
}

const bowling = new Bowling()
window.c = () => {
	let pos = {x: 0, y: 10 , z: 40}
	bowling.createBall(bowling.ammoClone, pos, false)
}