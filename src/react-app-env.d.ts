/// <reference types="react-scripts" />

interface ObjectConstructor {
	/**
	 * Returns an array of key/values of the enumerable properties of an object
	 * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
	 */
	keys<K extends PropertyKey>(o: Record<K, unknown>):K[];
	entries<K extends PropertyKey, T>(o: { [_ in K]: T } | ArrayLike<T>): [K, T][];
	fromEntries<K extends PropertyKey, T>(o: Iterable<readonly [K, T]>): Record<K, T>;
}

